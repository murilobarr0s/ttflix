import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // .catch -> retornar erros
  }, []);

  // http://localhost:8080/categorias?_embed=videos

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div> Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Review all the highlights from the Ma Long vs Xu Xin at the 2020 ITTF World Tour Platinum, German Open."
              />

              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
      {dadosIniciais.length >= 1 && (
        <>
          <BannerMain
            videoTitle={dadosIniciais[0].videos[0].titulo}
            url={dadosIniciais[0].videos[0].url}
            videoDescription="Review all the highlights from the Ma Long vs Xu Xin at the 2020 ITTF World Tour Platinum, German Open."
          />

          <Carousel
            ignoreFirstVideo
            category={dadosIniciais[0]}
          />

          <Carousel
            category={dadosIniciais[1]}
          />

          <Carousel
            category={dadosIniciais[2]}
          />

          <Carousel
            category={dadosIniciais[3]}
          />
        </>
      )}

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Review all the highlights from the Ma Long vs Xu Xin at the 2020 ITTF World Tour Platinum, German Open."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      */}
    </PageDefault>
  );
}

export default Home;
