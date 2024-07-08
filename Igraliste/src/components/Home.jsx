
import Swiper from './Swiper'
import Meda from '../assets/Home/meda-igraliste.webp'
import Panda from '../assets/Home/panda-igraliste.webp'



function Home() {

  return (
    <main className=" h-[200px] pt-[80px]">
      <Swiper />
      <article className="flex px-2 py-4 border border-red-600">
        <img src={Meda} className="w-1/4" />
        <p className="text-center font-style: italic px-8 ">
          Igralište je dečija igraonica namenjena deci najmladjeg uzrasta. Pored
          prostora koji je u potpunosti prilagodjen mališanima i njihovoj
          bezbednoj igri, Igralište sadrži i kafić u kome naši odrasli gosti
          mogu da se opuste u prijatnoj atmosferi. <br />
          <br /> Igraonica i kafić su u istom nivou pa deca nesmetano mogu
          prilaziti odraslima što im daje dodatan osećaj sigurnosti. <br />
          <br /> U prostoru za igru se nalaze originalni i edukativni dečiji
          sadržaji. Pored 3D Lavirinta nudimo i čitav niz igračaka u kojima deca
          mogu da se igraju igre uloga, pa tako postaju pravi mali kuvari,
          majstori,lekari, prodavci,vozači, vatrogasci, princeze… Imamo i veliki
          izbor društvenih igara, kocaka i sličnih igračaka za decu veliku i
          malu. <br />
          <br />
          Za najmladje goste tu je bazenčić sa lopticama, ljuljaška, guralice i
          igračke za bebe. <br />
          <br />
          U našoj igraonici možete proslaviti nezaboravne rodjendane vašim
          mališanima, uživati u svakodnevnoj igri i učestvovati u kreativnim
          radionicama koje sa puno pažnje priprema naše stručno osoblje. <br />{" "}
          Prostor je klimatizovan, postoji i odvojen deo namenjen pušačima, a za
          najmladje postoji deo za presvlač<enje className="br"></enje>
        </p>
        <img src={Panda} className="w-1/4" />
      </article>
      <article className="text-center text-3xl">
        <h2 className="font-style: italic">Zasto smo posebni...</h2>
        <div className="flex  justify-center  border border-red-600 ">
          <div className='w-1/4'></div>
          <div className='flex gap-6 '>
            <img
              src={Meda}
              alt=""
              className="h-[250px] border border-red-600"
            />
            <img
              src={Meda}
              alt=""
              className="h-[250px] border border-red-600"
            />
            <img
              src={Meda}
              alt=""
              className="h-[250px] border border-red-600"
            />
            <img
              src={Meda}
              alt=""
              className="h-[250px] border border-red-600"
            />
          </div>
          <div className='w-1/4'></div>
        </div>
      </article>
    </main>
  );
}

export default Home;