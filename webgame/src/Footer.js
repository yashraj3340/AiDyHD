export default function Footer() {
    return (
        <footer style={{ background: 'linear-gradient(135deg, #6E48AA, #4776E6)', color: 'white', padding: '20px 0' }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="mt-2" style={{ fontSize: '2.5em', textShadow: '0 0 7px #CFFF47' }}>Children with ADHD</h2>
                        <p style={{ fontSize: '1.1em', color: 'rgb(245, 245, 245)', lineHeight: '2', maxWidth: '800px', margin: '0 auto' }}>
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