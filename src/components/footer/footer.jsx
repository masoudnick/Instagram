import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const topLinkes = [
  {
    id: 1,
    href: "",
    name: "Meta",
  },
  {
    id: 2,
    href: "",
    name: "About",
  },
  {
    id: 3,
    href: "",
    name: "Blog",
  },
  {
    id: 4,
    href: "",
    name: "Jobs",
  },
  {
    id: 5,
    href: "",
    name: "Help",
  },
  {
    id: 6,
    href: "",
    name: "API",
  },
  {
    id: 7,
    href: "",
    name: "Privacy",
  },
  {
    id: 8,
    href: "",
    name: "Terms",
  },
  {
    id: 9,
    href: "",
    name: "Top Accounts",
  },
  {
    id: 10,
    href: "",
    name: "Hashtags",
  },
  {
    id: 11,
    href: "",
    name: "Locations",
  },
  {
    id: 12,
    href: "",
    name: "Instagram Lite",
  },
  {
    id: 13,
    href: "",
    name: "Contact Uploading & Non-Users",
  },
];

const Footer = () => {
  return (
    <footer className="footer bg-zinc-50 pt-11">
      <div className="flex flex-col">
        <div className="flex justify-center items-center flex-col pt-6 text-xs text-gray">
          <ul className="useful-linkes">
            {topLinkes.map((link) => (
              <li key={link.id}>
                <Link className="mb-3 mx-2 block" to={link.href}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="my-3 flex">
            <div>
              <select className="bg-transparent">
                <option value="af">Afrikaans</option>
                <option value="cs">Čeština</option>
                <option value="da">Dansk</option>
                <option value="de">Deutsch</option>
                <option value="el">Ελληνικά</option>
                <option value="en">English</option>
                <option value="en-gb">English (UK)</option>
                <option value="es">Español (España)</option>
                <option value="es-la">Español</option>
                <option value="fi">Suomi</option>
                <option value="fr">Français</option>
                <option value="id">Bahasa Indonesia</option>
                <option value="it">Italiano</option>
                <option value="ja">日本語</option>
                <option value="ko">한국어</option>
                <option value="ms">Bahasa Melayu</option>
                <option value="nb">Norsk</option>
                <option value="nl">Nederlands</option>
                <option value="pl">Polski</option>
                <option value="pt-br">Português (Brasil)</option>
                <option value="pt">Português (Portugal)</option>
                <option value="ru">Русский</option>
                <option value="sv">Svenska</option>
                <option value="th">ภาษาไทย</option>
                <option value="tl">Filipino</option>
                <option value="tr">Türkçe</option>
                <option value="zh-cn">中文(简体)</option>
                <option value="zh-tw">中文(台灣)</option>
                <option value="bn">বাংলা</option>
                <option value="gu">ગુજરાતી</option>
                <option value="hi">हिन्दी</option>
                <option value="hr">Hrvatski</option>
                <option value="hu">Magyar</option>
                <option value="kn">ಕನ್ನಡ</option>
                <option value="ml">മലയാളം</option>
                <option value="mr">मराठी</option>
                <option value="ne">नेपाली</option>
                <option value="pa">ਪੰਜਾਬੀ</option>
                <option value="si">සිංහල</option>
                <option value="sk">Slovenčina</option>
                <option value="ta">தமிழ்</option>
                <option value="te">తెలుగు</option>
                <option value="vi">Tiếng Việt</option>
                <option value="zh-hk">中文(香港)</option>
                <option value="bg">Български</option>
                <option value="fr-ca">Français (Canada)</option>
                <option value="ro">Română</option>
                <option value="sr">Српски</option>
                <option value="uk">Українська</option>
              </select>
            </div>
            <p className="ml-4">© 2022 Instagram from Meta</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
