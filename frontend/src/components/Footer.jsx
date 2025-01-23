export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row-1">
            <h2 className="heading heading-sm ">Deeksha Shetty</h2>
            <p className="main-footer__short-desc">
              An experienced MERN Developer focussed on building Websites and
              Web Applications that leads to the success of the overall product
            </p>
          </div>
          <div className="main-footer__row-2">
            <h2 className="heading heading-sm ">Social</h2>
            <div className="main-footer__social-cont">
              <a
                href="https://www.linkedin.com/in/deeksha-shetty-a6688419b/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png"
                  alt="Linkedin"
                  className="main-footer__icon"
                />
              </a>
              <a
                href="https://github.com/deeksha-code"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png"
                  alt="Github"
                  className="main-footer__icon"
                />
              </a>
              {/* <a
                href="https://www.youtube.com/@shreyassp17"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/493f1aa6da674c05bc606ba5b9e8092b881e8626/67c76/assets/png/yt-ico.png"
                  alt="Youtube"
                  className="main-footer__icon"
                />
              </a> */}
            </div>
          </div>
        </div>

        <div className="main-footer__lower">Made by Deeksha Shetty</div>
      </div>
    </footer>
  );
}
