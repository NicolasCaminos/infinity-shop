

const Footer = () => {

    return (
        <>
            <footer className="base-footer">
                <div>
                    <p className="pFooter"> Nicolas Maximiliano Caminos © 2023 </p>
                </div>
                <ul className="socialmedia">
                    <li>
                        <a title="github" className="bi bi-github" href="https://github.com/NicolasCaminos"></a>
                    </li>
                    <li>
                        <a title="linkedin" className="bi bi-linkedin" href="https://www.linkedin.com/in/nicolascaminos/"></a>
                    </li>
                    <li>
                        <a title="Whatsapp" className="bi bi-whatsapp" href="https://api.whatsapp.com/send?phone=3517075862"></a>
                    </li>
                    <li>
                        <a title="Youtube" className="bi bi-youtube"
                            href="https://www.youtube.com/channel/UCUDVBtnOQi4c7E8jebpjc9Q"></a>
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default Footer;