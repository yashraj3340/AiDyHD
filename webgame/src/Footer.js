import './App.css'; // Import the CSS file for styling

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="mt-2 footer-title">Children with ADHD</h2>
                        <p className="footer-text">
                            The medical contents of the website have been derived from trusted medical advisory websites.
                            The website in no way is a direct diagnosis of the medical condition. It is just an indicator,
                            tracking your mental health as you play the games. It is advised to see a doctor before taking 
                            any medications on your own. Mental Health is a serious issue.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}