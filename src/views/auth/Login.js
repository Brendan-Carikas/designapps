import React, { useState } from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
  TextField,
  Alert,
  InputAdornment,
  IconButton,
  Link,
} from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";
import { useAuthBackground } from "../../contexts/AuthBackgroundContext";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LogoIcon from "../../layouts/FullLayout/Logo/LogoIcon";

const LoginForm = ({ onSubmit, formData, handleChange, showPassword, setShowPassword, error, onSignupClick }) => {
  const { showBackground, isModal, customImage } = useAuthBackground();

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '1000px',
    borderRadius: '12px',
    overflow: 'hidden',
    display: 'flex',
  };

  const formContent = (
    <Box sx={{ 
      width: '100%',
      maxWidth: '400px',
      p: 3,
      mx: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      ...(showBackground && {
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 1
      })
    }}>
      <Box display="flex" justifyContent="center" mb={4}>
        <LogoIcon />
      </Box>
      
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Sign In
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3, width: '100%' }}>
          {error}
        </Alert>
      )}

      <Box component="form" onSubmit={onSubmit} sx={{ width: '100%' }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          autoFocus
          sx={{ mb: 3 }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
          sx={{ mb: 4 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Stack spacing={2}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember this device"
            />
          </FormGroup>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
          >
            Sign In
          </Button>

          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" color="textSecondary">
              Don't have an account? {" "}
              {onSignupClick ? (
                <Button
                  color="primary"
                  onClick={onSignupClick}
                  sx={{ textTransform: 'none', p: 0, minWidth: 'auto' }}
                >
                  Sign up
                </Button>
              ) : (
                <Link to="/signup" style={{ color: 'inherit' }}>
                  Sign up
                </Link>
              )}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );

  if (isModal) {
    return (
      <Box sx={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgcolor: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1300,
      }}>
        <Box sx={{
          ...modalStyle,
          bgcolor: 'background.default',
        }}>
          {showBackground && (
            <Box
              sx={{
                flex: '1 1 60%',
                backgroundImage: `url(${customImage || '/static/images/backgrounds/auth-bg.png'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: { xs: 'none', md: 'block' }
              }}
            />
          )}
          {formContent}
        </Box>
      </Box>
    );
  }

  return formContent;
};

const LoginNew = () => {
  const { login } = useAuth();
  const { showBackground, isModal, customImage } = useAuthBackground();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
    } catch (error) {
      setError("Failed to log in");
    }
  };

  return (
    <Box sx={{ 
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <LoginForm
        onSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        error={error}
      />
    </Box>
  );
};

export { LoginForm };
export default LoginNew;
