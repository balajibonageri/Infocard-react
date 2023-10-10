export default function Buttons() {
    const linkedIn = "https://www.linkedin.com/in/balaji-bonageri/";
    const mail = "mailto:bldecse.bsb@gmail.com";

    return (
        <div>

            <button>
                <a href={linkedIn}><i className="fa-brands fa-linkedin fa-xl"></i>LinkedIn</a>
            </button>

            <button>
                <a href={mail}><i className="fa-xl fa-solid fa-envelope"></i>E-Mail</a>
            </button>

        </div>
    );
}