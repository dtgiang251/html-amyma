import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Trang liên hệ đã hoạt động thành công!</p>
      <form>
        <label>
          Tên:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Nội dung:
          <textarea name="message"></textarea>
        </label>
        <br />
        <button type="submit">Gửi</button>
      </form>
    </div>
  );
};

export default Contact;
