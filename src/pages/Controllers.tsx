import { Header } from "../components/Header";

export function Controllers() {
  return (
    <>
      <Header />
      <div className="w-full px-4 py-4 flex flex-col gap-6">
        <div className="w-full flex flex-col justify-start px-4">
          <h1 className="text-gray-100  text-3xl ">Controllers</h1>
        </div>

        <div className="bg-gray-900 px-6 py-6">
          <div className="flex flex-col  gap-1">
            <h2 className="text-2xl">
              Controles para utilizar em qualquer página
            </h2>
            <p className="text-sx text-gray-300">
              Os controles que serão listados abaixo são compatíveis com quase
              todas as <strong>páginas</strong>. Alguns deles não funcionam em
              algumas páginas.
            </p>
          </div>

          <table className="mt-4 w-fullflex flex-col gap-2 bg-gray-900 border border-gray-800">
            <thead className=" bg-gray-800 px-4 py-4">
              <tr>
                <th className="py-2">Viewpart</th>
                <th className="py-2">Descrição</th>
              </tr>
            </thead>
            <tbody className=" gap-4 mt-4">
              <tr className="">
                <td className="px-4">
                  <code>&lt;vtex.cmc:AmountItemsInCart /&gt;</code>
                </td>
                <td className="px-4 py-4 text-sm">
                  <strong>Resumo do Carinho</strong>
                  <br />
                  Exibe os totais de produtos inseridos no carrinho de compras.
                  Ideal para ser usado no Header das lojas.
                  <br />
                </td>
              </tr>
              <tr>
                <td className="px-4">
                  <code>&lt;vtex.cmc:breadCrumb /&gt;</code>
                </td>
                <td className="px-4 py-4 text-sm">
                  <strong>Bread Crumb</strong>
                  <p>
                    {" "}
                    Funciona apenas nas páginas de Produto, Departamento,
                    Categoria e Busca.
                  </p>
                </td>
              </tr>
              <tr className="">
                <td className="px-4">
                  <code>&lt;vtex.cmc:fullTextSearchBox/&gt;</code>
                </td>
                <td className="px-4 py-4">
                  <strong>Busca Total</strong>
                  <br />
                </td>
              </tr>
              <tr>
                <td className="px-4">
                  <code>&lt;vtex.cmc:navigationHistory/&gt;</code>
                </td>
                <td className="px-4 py-4 text-sm">
                  <strong>Histórico de Navegação</strong>
                  <p>
                    {" "}
                    Exibe as últimas busca e últimos produtos vistos. Para
                    ativar a funcionalidade de últimos produtos vistos,
                    necessário adicionar esse controle na página de produto.
                  </p>
                </td>
              </tr>
              <tr className="">
                <td className="px-4">
                  <code>&lt;vtex.cmc:storeFlagLocator/&gt;</code>
                </td>
                <td className="px-4 py-4 text-sm">
                  <strong>Localizador de Lojas</strong>
                  <p>
                    Requisitos: Cadastrar no ADMIN as Lojas Físicas e seus
                    endereços. Além disso, pesquisar cada endereço no Google
                    Maps e preencher os devidos campos. Necessário configurar no
                    banco de conexão da Loja a chave do Google Maps adquirida
                    pela Loja.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-4">
                  <code>&lt;vtex.cmc:welcomeMessage/&gt;</code>
                </td>
                <td className="px-4 py-4 text-sm">
                  <strong>Mensagem de Boas Vindas</strong>
                  <p>
                    {" "}
                    No admin, na aba Configurações &gt; Textos, é possível
                    alterar a frase de Bem vindo.
                  </p>
                </td>
              </tr>
              <tr className="">
                <td className="px-4">
                  <code>&lt;vtex.cmc:metaTags/&gt;</code>
                </td>
                <td className="px-4 py-4 text-sm">
                  <strong>META TAGs</strong>
                </td>
              </tr>
              <tr>
                <td className="px-4">
                  <code>&lt;vtex.cmc:departmentLinks/&gt;</code>
                </td>
                <td className="px-4 py-4 text-sm">
                  <strong>Links de Departamentos</strong>
                  <p>
                    {" "}
                    Apresenta o primeiro nível de categorias criado no Admin.
                    Necessário configurar no Departamento que o mesmo será
                    apresentado no Menu Superior.
                  </p>
                </td>
              </tr>
              <tr className="">
                <td className="px-4">
                  <code>&lt;vtex.cmc:departmentNavigator/&gt;</code>
                </td>
                <td className="px-4 py-4 text-sm">
                  <strong>Menu de Departamentos</strong>
                  <p>
                    {" "}
                    Os Departamentos e Categorias são apresentadas de acordo com
                    o cadastro dos 1º e 2º Níveis. Para exibir o Link "Lista
                    Completa", também é necessário uma configuração nas
                    Categorias Ativas do Departamento.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-4">
                  <code>&lt;vtex.cmc:newsletterOptIn/&gt;</code>
                </td>
                <td className="px-4 py-4 text-sm">
                  <strong>Newsletter</strong>
                  <p>
                    {" "}
                    Formulário para cadastro de uma lista de nome e e-mail
                    cadastrado pelos Clientes.{" "}
                  </p>
                </td>
              </tr>
              <tr className="">
                <td className="px-4">
                  <code>&lt;vtex.cmc:latestSearchesTagCloud/&gt;</code>
                </td>
                <td className="px-4 py-4 text-sm">
                  <strong>Tag Cloud - Últimas Buscas</strong>
                  <p>
                    {" "}
                    É necessário inserir o controle de Histórico de Navegação na
                    página de Busca para que o controle de Tag Cloud seja
                    populada na Home.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-4">
                  <code>
                    &lt;vtex.cmc:latestSearchesCategoriesTagCloud/&gt;
                  </code>
                </td>
                <td className="px-4 py-4 text-sm">
                  <strong>Tag Cloud - Últimas Categorias</strong>
                  <p>
                    {" "}
                    É necessário que o cliente navegue pelas páginas dos
                    produtos das diversas categorias para que a Categoria seja
                    contabilizada.
                  </p>
                </td>
              </tr>
              <tr className="">
                <td className="px-4">
                  <code>&lt;vtex.cmc:searchTitle /&gt;</code>
                </td>
                <td className="px-4 py-4 text-sm">
                  <strong>Título da Página</strong>
                  <p>
                    {" "}
                    Exibe o título das páginas de Departamento, Categoria e
                    Busca.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-4">
                  <code>
                    &lt;vtex.cmc:ProductQueryStringReferenceShelf/&gt;
                  </code>
                </td>
                <td className="px-4 py-4 text-sm">
                  <div className="flex flex-col gap-2">
                    <strong>Produtos em destaque (Landing Page)</strong>
                    Atributos da Tag:
                    <strong>layout:</strong> ID do template da prateleira.
                    Atributo obrigatório.
                    <strong>itemCount:</strong> Quantidade de itens a serem
                    apresentados. Atributo obrigatório.
                    <strong>columnCount:</strong> Quantidade de colunas.
                    Atributo obrigatório.
                    <strong>showUnavailable:</strong> Quando o atributo está
                    setado para true significa que deve exibir os produtos
                    esgotados.
                    <strong>selectionMode="batch-buy":</strong> Atributo não
                    obrigatório que permite a realização de compra em lote.
                    <strong>isTrackable:</strong> Quando o atributo está setado
                    para true significa que este controle deve ser rastreável.
                    <strong>InternalCampaign:</strong> Nome da campanha interna.
                    <strong>InternalPart:</strong> Nome da view part interna.
                    <strong>Exemplo de uso:</strong>
                  </div>
                  <code>
                    &lt;vtex.cmc:ProductQueryStringReferenceShelf
                    layout="e2ed81f5-6241-4418-a47b-018d7482fcf0" itemCount="3"
                    columnCount="3" showUnavailable="true" isTrackable="true"
                    InternalCampaign="Destaque landing" InternalPart="Prateleira
                    destaque" /&gt;
                  </code>
                </td>
              </tr>
              <tr className="">
                <td className="px-4">
                  <code>&lt;vtex.cmc:productQuickView/&gt;</code>
                </td>
                <td className="px-4 py-4 text-sm">
                  <strong>Espiar (QuickView)</strong>
                  <p>
                    {" "}
                    Controle deve ser adicionado antes do fechamento da tag{" "}
                    <code>&lt;/body&gt;</code> do template de página de{" "}
                    <strong>Quickview</strong>. Ele é fundamental para o
                    carregamento dos arquivos necessários da página.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
