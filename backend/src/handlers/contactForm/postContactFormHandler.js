const {
    postContactFormController,
  } = require("../../controllers/contactForm/postContactFormController");

const postContactFormHandler = async (req, res) => {
    const { userID, name, email, message } = req.body;
    
    try {
      const newContactForm = await postContactFormController(
        userID,
        name,
        email,
        message
      );
      res.status(201).json(newContactForm);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    postContactFormHandler,
  };