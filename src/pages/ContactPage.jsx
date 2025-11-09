import { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Alert,
} from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - save to localStorage
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    messages.push({
      ...formData,
      id: Date.now(),
      date: new Date().toISOString(),
    });
    localStorage.setItem('contactMessages', JSON.stringify(messages));
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold' }}>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', color: 'text.secondary' }}>
        Have a question or feedback? We'd love to hear from you!
      </Typography>

      <Grid container spacing={4}>
        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
              Get in Touch
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Email sx={{ mr: 2, color: 'primary.main' }} />
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Email
                  </Typography>
                  <Typography variant="body1">support@shein-clone.com</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Phone sx={{ mr: 2, color: 'primary.main' }} />
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Phone
                  </Typography>
                  <Typography variant="body1">+1 (555) 123-4567</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn sx={{ mr: 2, color: 'primary.main' }} />
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Address
                  </Typography>
                  <Typography variant="body1">
                    123 Fashion Street
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Business Hours
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Monday - Friday: 9:00 AM - 6:00 PM
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Saturday: 10:00 AM - 4:00 PM
              </Typography>
              <Typography variant="body2">Sunday: Closed</Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
              Send us a Message
            </Typography>

            {submitted && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Thank you for your message! We'll get back to you soon.
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange('name')}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange('email')}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    required
                    value={formData.subject}
                    onChange={handleChange('subject')}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange('message')}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" size="large">
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>

      {/* FAQ Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold' }}>
          Frequently Asked Questions
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                What is your return policy?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We offer a 30-day return policy for unused items with tags attached. Returns are free
                for orders over $50.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                How long does shipping take?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Standard shipping takes 5-7 business days. Express shipping (2-3 days) is available
                for an additional fee.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                Do you ship internationally?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Yes, we ship to over 50 countries worldwide. International shipping rates and delivery
                times vary by location.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                How can I track my order?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Once your order ships, you'll receive a tracking number via email. You can track your
                order status in your account dashboard.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactPage;

