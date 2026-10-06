import "./service.css";
import { useLanguage } from "../../i18n/LanguageContext";

const Service = () => {
  const { t } = useLanguage();

  return (
    <section className="container">
      <div className="service">
        <div className="service_top">
          <h1>{t("service_title")}</h1>
          <p>{t("service_intro")}</p>
        </div>

        <div className="service_main">
          <h2>{t("service_support_title")}</h2>
          <div className="best">
            <div className="card">
              <div className="son">1</div>
              <p>
                <a href="https://rtrf.ru/service/upload/RKLMACTRT26.pdf" target="_blank" rel="noreferrer">
                  {t("service_step1_link")}
                </a>{" "}{t("service_step1_text")}
              </p>
            </div>
            <div className="card">
              <div className="son">2</div>
              <p>{t("service_step2_text")}</p>
            </div>
            <div className="card">
              <div className="son">3</div>
              <p>
                {t("service_step3_prefix")} {" "}
                <a href="mailto:kb1@rtrf.ru">kb1@rtrf.ru</a>
              </p>
            </div>
          </div>
        </div>

        <div className="service_footer">
          <p>{t("service_footer_first")}</p>
          <p>
            {t("service_footer_questions")} {" "}
            <a href="tel:+78312250055">8 (831) 225-00-55 (доб 610)</a> {" "}
            {t("service_footer_or")} {" "}
            <a href="mailto:kb1@rtrf.ru">kb1@rtrf.ru</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
