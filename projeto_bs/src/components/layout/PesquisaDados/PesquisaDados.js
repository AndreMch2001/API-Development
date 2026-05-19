import { useState } from 'react';

import style from './PesquisaDados.module.css';
import { LAYOUT_TYPE } from '../../../constants/layoutTypes.js';
import mockData from '../../../Mocks/bolsafamilia.Mock.json';

function InputFiltro({
  label,
  id,
  type = "text",
  name,
  className,
  placeholder,
  value,
  onChange
}) {

  return (
    <div className={style.div_InputFiltro}>

      <label htmlFor={id}>
        {label}
      </label>

      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
        aria-label={label}
      />

    </div>
  );
}

function PesquisaDados({
  setResultados,
  setLoading,
  setErro,
  tipo = LAYOUT_TYPE.PRE_LOGIN
}) {

  const [filtros, setFiltros] = useState({
    nome: '',
    nisFavorecido: '',
    nomeMunicipio: '',
    uf: '',
    competencia: ''
  });

  function atualizarFiltro(event) {

    const { name, value } = event.target;

    setFiltros((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  
  {/*async function pesquisar(event) {
        event.preventDefault();

        try {

            setLoading(true);
            setErro(null);

            const params = new URLSearchParams();

            params.append('pagina', 0);
            params.append('tamanho', 20);

            if (filtros.nome.trim()) {
                params.append('nome', filtros.nome);
            }

            if (filtros.nisFavorecido.trim()) {
                params.append('nisFavorecido', filtros.nisFavorecido);
            }

            if (filtros.nomeMunicipio.trim()) {
                params.append('nomeMunicipio', filtros.nomeMunicipio);
            }

            if (filtros.uf.trim()) {
                params.append('uf', filtros.uf);
            }

            if (filtros.competencia.trim()) {
                params.append('competencia', filtros.competencia);
            }

            const response = await fetch(
                `http://localhost:8080/api/Bolsafamiliamodel/busca?${params.toString()}`
            );

            if (!response.ok) {
                throw new Error('Erro ao buscar dados');
            }

            const data = await response.json();

            setResultados(data.content);

        } catch (error) {

            console.error(error);

            setErro('Erro ao carregar resultados');

        } finally {

            setLoading(false);

        }
    }*/}
async function pesquisar(event) {

    event.preventDefault();

    try {

      setLoading(true);

      setErro(null);

      // Simula delay da API

      await new Promise(resolve =>
        setTimeout(resolve, 1000)
      );

      // JSON mockado

      setResultados(mockData.content);

    } catch (error) {

      console.error(error);

      setErro('Erro ao carregar resultados.');

    } finally {

      setLoading(false);

    }
  }

  if (tipo === LAYOUT_TYPE.NONE) return null;

  return (
    <>
      {tipo === LAYOUT_TYPE.PRE_LOGIN && (

        <section className={style.secaoFiltro}>

          <h2 className={style.secaoFiltro_Titulo}>
            Filtros de Pesquisa
          </h2>

          <p className={style.secaoFiltro_Texto}>
            Use os filtros para refinar sua busca.
          </p>

          <form
            className={style.secaoFiltro_Lista}
            onSubmit={pesquisar}
          >

            <InputFiltro
              label="Filtrar pelo Nome"
              id="filtroNome"
              name="nome"
              value={filtros.nome}
              onChange={atualizarFiltro}
              className={style.secaoFiltro_Input}
              placeholder="Nome do favorecido"
            />

            <InputFiltro
              label="Filtrar pelo NIS"
              id="filtroNIS"
              name="nisFavorecido"
              value={filtros.nisFavorecido}
              onChange={atualizarFiltro}
              className={style.secaoFiltro_Input}
              placeholder="NIS"
            />

            <InputFiltro
              label="Município"
              id="filtroMunicipio"
              name="nomeMunicipio"
              value={filtros.nomeMunicipio}
              onChange={atualizarFiltro}
              className={style.secaoFiltro_Input}
              placeholder="Município"
            />

            <InputFiltro
              label="UF"
              id="filtroUF"
              name="uf"
              value={filtros.uf}
              onChange={atualizarFiltro}
              className={style.secaoFiltro_Input}
              placeholder="Ex: SC"
            />

            <InputFiltro
              label="Competência"
              id="filtroCompetencia"
              name="competencia"
              value={filtros.competencia}
              onChange={atualizarFiltro}
              className={style.secaoFiltro_Input}
              placeholder="2025-01"
            />

            <button
              type="submit"
              className={style.button}
              aria-label="Pesquisar"
            >
              ➤
            </button>

          </form>

        </section>

      )}
    </>
  );
}

export default PesquisaDados;