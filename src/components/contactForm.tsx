import React, { useRef } from "react";
import { useState } from "react";
// import emailjs from "@emailjs/browser";

interface FormData {
  user_name: string;
  user_company: string;
  user_email: string;
  user_phone: string;
  message: string;
}

const Inquiry = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  const form = useRef<HTMLFormElement>(null);

  //DATABASE
  const [formData, setFormData] = useState<FormData>({
    user_name: "",
    user_company: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/dataSaver", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log("Data sent to database:", data);
    } catch (error) {
      console.error("Error sending data to database:", error);
    }
//EMAIL JS
    // if (form.current) {
    //   emailjs
    //     .sendForm(
    //       "service_te7i92q",
    //       "template_iopy4qn",
    //       form.current,
    //       "KunU0tXpaWQjLQJX4"
    //     )
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //         console.log("Message sent successfully");
    //       },
    //       (error) => {
    //         console.log(error.text);
    //         console.log("Error sending message");
    //       }
    //     );
    // }
  };

  return (
    <>
      <style jsx>
        {`
          * {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
          }

          .sidebar-contact {
            position: fixed;
            top: 50%;
            left: -350px;
            transform: translateY(-50%);
            width: 350px;
            height: auto;
            padding: 40px;
            background: #fff;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
            box-sizing: border-box;
            transition: 0.5s;
            z-index: 9;
          }

          .sidebar-contact.active {
            left: 0;
          }

          .sidebar-contact input,
          .sidebar-contact textarea {
            width: 100%;
            height: 36px;
            padding: 5px;
            margin-bottom: 10px;
            box-sizing: border-box;
            border: 1px solid rgba(0, 0, 0, 0.5);
            outline: none;
          }

          .sidebar-contact h2 {
            margin: 0 0 20px;
            padding: 0;
          }

          .sidebar-contact textarea {
            height: 60px;
            resize: none;
          }

          .sidebar-contact input[type="submit"] {
            background: #00bcd4;
            color: #fff;
            cursor: pointer;
            border: none;
            font-size: 18px;
          }

          .toggle {
            position: absolute;
            height: 48px;
            width: 48px;
            text-align: center;
            cursor: pointer;
            background: #f00;
            top: 0;
            right: -48px;
            line-height: 48px;
          }

          .toggle:before {
            content: "\f003";
            font-family: fontAwesome;
            font-size: 18px;
            color: #fff;
          }

          .toggle.active:before {
            content: "\f00d";
          }

          @media (max-width: 768px) {
            .sidebar-contact {
              width: 100%;
              height: 100%;
              left: -100%;
            }

            .sidebar-contact .toggle {
              top: 50%;
              transform: translateY(-50%);
              transition: 0.5s;
            }

            .sidebar-contact.active .toggle {
              top: 0;
              right: 0;
              transform: translateY(0);
            }

            .scroll {
              width: 100%;
              height: 100%;
              overflow-y: auto;
            }

            .content {
              padding: 50px 50px;
            }
          }
        `}
      </style>
      <div className={`sidebar-contact ${isActive ? "active" : ""}`}>
        <div
          className={`toggle ${isActive ? "active" : ""}`}
          onClick={toggleSidebar}
        ></div>
        <h2>Contact Us</h2>
        <div className="scroll">
          <form onSubmit={handleSubmit} ref={form}>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              value={formData.user_name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="user_company"
              placeholder="Company Name"
              value={formData.user_company}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              value={formData.user_email}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="Phone Number"
              value={formData.user_phone}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              placeholder="Message here.."
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Inquiry;
