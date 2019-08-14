import { Controller } from "stimulus"

export default class NewsletterController extends Controller {
  static targets = [ "fname", "lname", "email", "surreyEmail", "consent", "submit" ]

  connect() {
    this.surreyEmailTarget.style.display = "none";
  }

  check_email() {
    let email = this.emailTarget.value.trim()

    if (email.length > 0 && email.includes("@")) {
      if (email.endsWith("@surrey.ac.uk")) {
        this.surreyEmailTarget.style.display = "none";
      } else {
        this.surreyEmailTarget.style.display = "block";
      }
    }
  }

  validate() {
    let fname = this.fnameTarget.value.trim()
    let lname = this.lnameTarget.value.trim()
    let email = this.emailTarget.value.trim()

    if (this.consentTarget.checked && fname.length > 0 && lname.length > 0) {
      this.submitTarget.disabled = false
    } else {
      this.submitTarget.disabled = true
    }
  }
}