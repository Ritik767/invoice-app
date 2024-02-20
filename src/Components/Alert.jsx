import { useState, useEffect } from "react";
import swal from "sweetalert";
// import "./styles.css";

export default function App() {
  const [isVisible, setVisible] = useState(false);
  const [displayText, setText] = useState("");

  useEffect(() => {
    let swalInst;
    const showAlert = async () => {
      swalInst = swal({
        text:
          "Es befinden sich Artikel aus einem anderen Restaurant im Warenkorb",
        buttons: {
          cancel: "Continue with bag",
          catch: {
            text: "Clear bag",
            value: "catch"
          }
        }
      });
      const result = await swalInst;
      // handle your actions here
      switch (result) {
        case "catch":
          // clear everything here!!
          console.log("clearing...");
          setText("cleared!");
          break;
        default:
          console.log("dismissed");
          setText("dismissed!");
      }
      // always hide
      setVisible(false);
      console.log(result);
    };
    if (isVisible) {
      showAlert();
    } else {
      if (swalInst) {
        swalInst.cancel();
      }
    }
  }, [isVisible]);

  return (
    <div className="App">
      <button onClick={() => setVisible(true)}>Show alert</button>
      <h1>{displayText}</h1>
    </div>
  );
}