import React from "react";

function FooterBottom() {

    const today = new Date();
    const year = today.getFullYear();

  return (
    <div className="mt-4 pt-6 text-white border-t border-gray-800 text-center">
      {" "}
      CopyRight © {year} WeTeach. All rights reserved.
    </div>
  );
}

export default FooterBottom;
