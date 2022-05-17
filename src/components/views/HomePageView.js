/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
const HomePageView = () => {
  // Render Home page view
  return (
    <div className="homeContainer" style={{position: 'relative', top: '58px', width: '100vw'}}>
      
      <img className="homeLogo" src="https://www.scramsystems.com/blog/wp-content/uploads/cartoon-college-campus.jpg"></img>
      <div id="welcome">Welcome</div>
      <div id="to">To</div>
      <div id="websiteTitle">Campus Management System</div>
    </div>
  );    
}

export default HomePageView;