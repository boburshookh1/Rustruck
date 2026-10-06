import "./mainRus.css"
import { useLanguage } from "../../../i18n/LanguageContext";

const MainRus = () => {
    const { t } = useLanguage();

    return (
        <section className="container">
            <div className="rusSection flex justify-content items-center mt-[50px]">
                <div className="section_left">
                    <h1 className="font-[500] text-[42px]">
                        {t("about_company_title_prefix")}{" "}
                        <span className="text-[#FEC80B]">{t("about_company_title_highlight")}</span>
                    </h1>
                    <p className="mt-[22px] mb-[64px] text-[18px] font-[400] max-w-[536px]">
                        {t("about_company_text").split("\n\n").map((paragraph, index) => (
                            <span key={index}>
                                {paragraph}
                                <br /><br />
                            </span>
                        ))}
                    </p>
                </div>
                <div className="section_right">
                    <img src="/site-media-058.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default MainRus;