import { Link } from "react-router-dom"
import "./footer.css"
const Footer = () => {
  return (
    <>
      <footer className="main_container">
        <div className="flex justify-between items-start py-[40px] gap4 border-t flex-col lg:flex-row gap-[40px]">
          <div className="max-w-[450px]">
            <h3 className="text-[18px] font-semibold">Doim siz uchun:</h3>

            <ul className="pl-[13px] font-light">
              <li className="list-disc">har kuni - 50% gacha chegirmalar;</li>
              <li className="list-disc">Toshkentda 10 tagacha tovarni bepul oʻlchab koʻrish;</li>
              <li className="list-disc">toʻlov tizimlari oqali toʻlash (mintaqalar uchun):</li>
              <li className="flex justify-start items-center gap-4 flex-wrap mt-3">
                <img src="./click.png" alt="click" className="h-[35px]" />
                <img src="./payme.png" alt="click" className="h-[35px]" />
                <img src="./uzcard.png" alt="click" className="h-[35px]" />
                <img src="./humo.png" alt="click" className="h-[35px]" />
              </li>
            </ul>
          </div>

          <div className="lg:max-w-[450px]">
            <h3 className="text-[18px] font-semibold">Nega xaridorlar «Latinka» ni tanlaydilar:</h3>

            <p className="text-[16px] font-light mt-3">Kiyim-kechak va aksessuarlarning keng va istalgan paytda buyurtirishga hozir tanlovi. Barcha tovarlar omborlarimizda mavjud va oʻzbekistonning istalgan shahriga yetkazib beriladi.</p>
          </div>
        </div>
        <div className="footer_description border-t py-[25px] flex-col sm:flex-row gap-1 text-center">
          <p>&copy; Lanitka uz 2022 - {new Date().getFullYear()} Barcha huquqlar himoyalangan</p>
          <div className="flex justify-center items-center gap-1 flex-wrap">
            <p>Made with ❤️ by<Link to={'https://www.instagram.com/'} className="font-semibold"> _abdujabbarof_</Link> & <Link to={''} className="font-semibold"> doston_coder_</Link></p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer