export default {
  name: 'PlayGround',
  data() {
    return {
      // Form data. Holds all content written by the user.
      form: {
        firstname: '',
        lastName: '',
        email: '',
        subject: '',
        content: '',
        // Checkbox starts off unchecked because we need the confirmation form the user.
        agree: false
      },
      // The default visibility of the dialog box.
      dialogVisible: false
    }
  }
}
