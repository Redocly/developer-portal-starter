import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export function Modal() {
  const MySwal = withReactContent(Swal);
  const termsIsConfirmed = localStorage.getItem("termsIsConfirmed");

  if (termsIsConfirmed === "false" || termsIsConfirmed === null) {
    MySwal.fire({
      title:
		`<strong>By proceeding to use the portal, you agree to our
		<a target="_blank" href="https://www.google.com/"><u>Terms and Conditions</u></strong></a>`,
      showDenyButton: true,
      focusConfirm: true,
      confirmButtonText: "Great!",
      confirmButtonAriaLabel: "Thumbs up, great!",
      denyButtonText: "Leave",
      denyButtonAriaLabel: "Thumbs down",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem("termsIsConfirmed", "true");
      } else if (result.isDenied) {
        localStorage.setItem("termsIsConfirmed", "false");
        window.close();
      }
    });
  };

  return null;
}