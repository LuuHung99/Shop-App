import React from "react";
import LayoutPage from "../../components/layout";

function HomePage(props) {
  return (
    <LayoutPage>
      
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 380, backgroundColor: '#fff'  }}
      >
        Content
      </div>
    </LayoutPage>
  );
}

export default HomePage;
