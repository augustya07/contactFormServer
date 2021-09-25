import mongoose from "mongoose";

const contactFormSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);
const ContactForm = mongoose.model("ContactForm", contactFormSchema);

export default ContactForm;
