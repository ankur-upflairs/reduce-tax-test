import React, { useState } from 'react';
import { TextField, Button, Typography, Container, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2';  // Always import Grid from @mui/material/Grid2
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    image1: '',
    image2: '',
    image3: '',
    list: '',
    paragraph: '',
    listTitle: '',  // Added listTitle field
  });

  const [additionalFields, setAdditionalFields] = useState({
    image2: false,
    image3: false,
    list: false,
    paragraph: false,
    listTitle: false,  // Added listTitle field flag
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddField = (field) => {
    setAdditionalFields({
      ...additionalFields,
      [field]: true,
    });
  };

  const handleRemoveField = (field) => {
    setAdditionalFields({
      ...additionalFields,
      [field]: false,
    });
    setFormData({
      ...formData,
      [field]: '', // clear the value for the removed field
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic (e.g., API call or saving data)
    console.log('Form Data:', formData);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography variant="h5" gutterBottom>
          Create Blog
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Title */}
            <Grid item xs={12} size={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Body */}
            <Grid item xs={12} size={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Body"
                name="body"
                value={formData.body}
                onChange={handleChange}
                multiline
                rows={4}
                required
              />
            </Grid>

            {/* Image1 */}
            <Grid item xs={12} size={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Image 1 URL"
                name="image1"
                value={formData.image1}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Dynamically Add/Remove fields */}
            {additionalFields.image2 && (
              <Grid item xs={12} size={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Image 2 URL"
                  name="image2"
                  value={formData.image2}
                  onChange={handleChange}
                />
                <IconButton
                  color="secondary"
                  onClick={() => handleRemoveField('image2')}
                  aria-label="remove-image2"
                >
                  <RemoveCircleIcon />
                </IconButton>
              </Grid>
            )}

            {additionalFields.image3 && (
              <Grid item xs={12} size={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Image 3 URL"
                  name="image3"
                  value={formData.image3}
                  onChange={handleChange}
                />
                <IconButton
                  color="secondary"
                  onClick={() => handleRemoveField('image3')}
                  aria-label="remove-image3"
                >
                  <RemoveCircleIcon />
                </IconButton>
              </Grid>
            )}

            {additionalFields.listTitle && (
              <Grid item xs={12} size={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="List Title"
                  name="listTitle"
                  value={formData.listTitle}
                  onChange={handleChange}
                />
                <IconButton
                  color="secondary"
                  onClick={() => handleRemoveField('listTitle')}
                  aria-label="remove-listTitle"
                >
                  <RemoveCircleIcon />
                </IconButton>
              </Grid>
            )}

            {additionalFields.list && (
              <Grid item xs={12} size={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="List Items (comma separated)"
                  name="list"
                  value={formData.list}
                  onChange={handleChange}
                />
                <IconButton
                  color="secondary"
                  onClick={() => handleRemoveField('list')}
                  aria-label="remove-list"
                >
                  <RemoveCircleIcon />
                </IconButton>
              </Grid>
            )}

            {additionalFields.paragraph && (
              <Grid item xs={12} size={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Paragraph"
                  name="paragraph"
                  value={formData.paragraph}
                  onChange={handleChange}
                  multiline
                  rows={4}
                />
                <IconButton
                  color="secondary"
                  onClick={() => handleRemoveField('paragraph')}
                  aria-label="remove-paragraph"
                >
                  <RemoveCircleIcon />
                </IconButton>
              </Grid>
            )}

            {/* Add Buttons for Optional Fields */}
            {!additionalFields.image2 && (
              <Grid item xs={12} size={12}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<AddCircleIcon />}
                  onClick={() => handleAddField('image2')}
                >
                  Add Image 2
                </Button>
              </Grid>
            )}

            {!additionalFields.image3 && (
              <Grid item xs={12} size={12}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<AddCircleIcon />}
                  onClick={() => handleAddField('image3')}
                >
                  Add Image 3
                </Button>
              </Grid>
            )}

            {!additionalFields.listTitle && (
              <Grid item xs={12} size={12}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<AddCircleIcon />}
                  onClick={() => handleAddField('listTitle')}
                >
                  Add List Title
                </Button>
              </Grid>
            )}

            {!additionalFields.list && (
              <Grid item xs={12} size={12}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<AddCircleIcon />}
                  onClick={() => handleAddField('list')}
                >
                  Add List
                </Button>
              </Grid>
            )}

            {!additionalFields.paragraph && (
              <Grid item xs={12} size={12}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<AddCircleIcon />}
                  onClick={() => handleAddField('paragraph')}
                >
                  Add Paragraph
                </Button>
              </Grid>
            )}

            {/* Submit Button */}
            <Grid item xs={12} size={12}>
              <Button type="submit" fullWidth variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default BlogForm;
