import { Header } from "../components/Header";

export function Events() {
  return (
    <div>
      <Header />
      <div className="w-full px-4 py-4 flex flex-col gap-6">
        <div className="w-full flex justify-start px-4">
          <h1 className="text-gray-100  text-3xl ">Eventos</h1>
        </div>
        <table className="px-4 py-4">
          <tbody className="flex flex-col w-full px-4 py-2 gap-6">
            <tr className="">
              <td className="text-gray-300">
                <h2 className="text-gray-100 mb-2">Gerenciar uma Lista</h2>
                <code className=" bg-gray-800 px-4 py-2 rounded-sm text-gray-200 font-medium">
                  &lt;vtex.cmc:GiftListManagerV2 /&gt;
                </code>
                <p className="mt-2 t">
                  Os seguintes parâmtros são permitidos: types="1,2,3,..." -
                  especifica quais tipos de listas serão permitidos na criação.
                  Por padrão, todos os tipos ativos são permitidos.
                  ignoretypes="1,2,3,..." - especifica quais tipos de listas
                  serão ignorados. Por padrão, todos os tipos ativos são
                  permitidos. urlmanage="http://mysite.com/alternatefolder" -
                  caminho customizado nos links para a página de gerenciamento
                  da lista. urledit="http://mysite.com/alternatefolder" -
                  caminho customizado nos links para a página de edição e
                  criação da lista.
                  urlproduct="http://mysite.com/alternatefolder" - caminho
                  customizado nos links para a página de produtos da lista.
                </p>
              </td>
            </tr>
            <tr className="">
              <td className="text-gray-300">
                <h2 className="text-gray-100 mb-2">Busca de Listas</h2>
                <code className=" bg-gray-800 px-4 py-2 rounded-sm text-gray-200 font-medium">
                  &lt;vtex.cmc:GiftListSearchV2 /&gt;
                </code>
                <p className="mt-2">
                  Os seguintes parâmtros são permitidos: types="1,2,3,..." -
                  especifica quais tipos de listas serão permitidos nos
                  resultados de busca. Por padrão, todos os tipos ativos são
                  permitidos ignoretypes="1,2,3,..." - especifica quais tipos de
                  listas serão ignorados. Por padrão, todos os tipos ativos são
                  permitidos image="48" - ID do tipo da imagem da lista. O
                  padrão é 3 (thumb)
                </p>
              </td>
            </tr>
            <tr className="">
              <td className="text-gray-300">
                <h2 className="text-gray-100 mb-2">Produtos de uma Lista</h2>
                <code className=" bg-gray-800 px-4 py-2 rounded-sm text-gray-200 font-medium">
                  &lt;vtex.cmc:GiftListProductsV2 /&gt;
                </code>
                <p>
                  {" "}
                  Os seguintes parâmtros são permitidos: size="20" - número de
                  produtos exibidos por página. O padrão é 10 image="3" - ID do
                  tipo da imagem do produto exibido. O padrão é 3 (thumb)
                  urlmanage="http://mysite.com/alternatefolder" - caminho
                  customizado nos links para a página de gerenciamento da lista
                  popup="true" - exibe as compras de um produto em uma popup
                  (modal), "false" exibe as compras incorporadas no HTML da
                  página. O padrão é "true"
                </p>
              </td>
            </tr>
            <tr className="">
              <td className="text-gray-300">
                <h2 className="text-gray-100 mb-2">
                  Criar ou Editar uma Lista
                </h2>
                <code className=" bg-gray-800 px-4 py-2 rounded-sm text-gray-200 font-medium">
                  &lt;vtex.cmc:GiftListFormV2 /&gt;
                </code>
                <p className="mt-2">
                  {" "}
                  Os seguintes parâmtros são permitidos: types="1,2,3,..." -
                  especifica quais tipos de listas serão permitidos na criação.
                  Por padrão, todos os tipos ativos são permitidos
                  ignoretypes="1,2,3,..." - especifica quais tipos de listas
                  serão ignorados. Por padrão, todos os tipos ativos são
                  permitidos urlmanage="http://mysite.com/alternatefolder" -
                  caminho customizado nos links para a página de gerenciamento
                  da lista urledit="http://mysite.com/alternatefolder" - caminho
                  customizado nos links para a página de edição da lista
                </p>
              </td>
            </tr>
            <tr className="">
              <td className="text-gray-300">
                <h2 className="text-gray-100 mb-2">Informações de uma Lista</h2>
                <code className=" bg-gray-800 px-4 py-2 rounded-sm text-gray-200 font-medium">
                  &lt;vtex.cmc:GiftListInfoV2 /&gt;
                </code>
                <p className="mt-2">
                  {" "}
                  Os seguintes parâmtros são permitidos:
                  urledit="http://mysite.com/alternatefolder" - caminho
                  customizado nos links para a página de edição da lista
                  giftcard="true" - exibe o saldo do vale compras para uma lista
                  com conversão do valor do produto em vale autocookie="false" -
                  permite ao visitante escolher se deseja comprar para esta
                  lista ou não. O padrão é "true"
                </p>
              </td>
            </tr>
            <tr className="">
              <td className="text-gray-300">
                <h2 className="text-gray-100 mb-2">
                  Inserir produtos na lista
                </h2>
                <code className=" bg-gray-800 px-4 py-2 rounded-sm text-gray-200 font-medium">
                  &lt;vtex.cmc:GiftListInsertSkuV2 /&gt;
                </code>
                <p className="mt-2">
                  Os seguintes parâmtros são permitidos: types="1,2,3,..." -
                  especifica quais tipos de listas serão permitidos. Por padrão,
                  todos os tipos ativos são permitidos ignoretypes="1,2,3,..." -
                  especifica quais tipos de listas serão ignorados. Por padrão,
                  todos os tipos ativos são permitidos
                  urledit="http://mysite.com/alternatefolder" - caminho
                  customizado nos links para a página de edição da lista
                  mode="combo", "radio" ou "list" - modo de exibição da listagem
                  de listas do usuário para inserção: O padrão é "list"
                  popup="true" - exibe o controle em uma popup (modal), "false"
                  exibe o controle incorporado no HTML da página. O padrão é
                  "true" addsku="false" - não soma quantidades ao inserir
                  produtos já existentes na lista. O padrão é "false" (apenas na
                  página de produto) select="true" - exibe todos os skus do
                  produto em uma lista de checkboxes (recomendado para produtos
                  com exibição em lista) (apenas em páginas de vitrine) utilizar
                  $product.InsertSku no template de prateleira para exibir o
                  controle individual de seleção de produtos
                </p>
              </td>
            </tr>
            <tr className="">
              <td className="text-gray-300">
                <h2 className="text-gray-100 mb-2">
                  Compras confirmadas para uma lista
                </h2>
                <code className=" bg-gray-800 px-4 py-2 rounded-sm text-gray-200 font-medium">
                  &lt;vtex.cmc:GiftListOrderV2 /&gt;
                </code>
                <p className="mt-2">
                  Os seguintes parâmtros são permitidos:
                  urlmain="http://mysite.com/alternatefolder" - caminho
                  customizado para a página principal da lista image="3" - ID do
                  tipo da imagem do produto exibido. O padrão é 3 (thumb) *O
                  conteúdo deste controle é exibido em uma popup (modal)
                </p>
              </td>
            </tr>
            <tr className="">
              <td className="text-gray-300">
                <h2 className="text-gray-100 mb-2">
                  Estatísticas de uma Lista
                </h2>
                <code className=" bg-gray-800 px-4 py-2 rounded-sm text-gray-200 font-medium">
                  &lt;vtex.cmc:GiftListStatisticsV2 /&gt;
                </code>
                Os seguintes parâmtros são permitidos:
                urlorder="http://mysite.com/alternatefolder" - caminho
                customizado para a página de exibição de compras para a lista
                image="3" - ID do tipo da imagem do produto exibido. O padrão é
                3 (thumb)
              </td>
            </tr>
            <tr className="">
              <td className="text-gray-300">
                <h2 className="text-gray-100 mb-2">
                  Menu lateral de navegação da lista
                </h2>
                <code className=" bg-gray-800 px-4 py-2 rounded-sm text-gray-200 font-medium">
                  &lt;vtex.cmc:giftListNavigation /&gt;
                </code>
                <p className="mt-2"> Menu lateral de navegação da lista</p>
              </td>
            </tr>
            <tr className="">
              <td>
                <h2 className="text-gray-100 mb-2">
                  Enviar produtos da lista para o carrinho
                </h2>
                <code className=" bg-gray-800 px-4 py-2 rounded-sm text-gray-200 font-medium">
                  &lt;vtex.cmc:giftListSendToCartButton /&gt;
                </code>
                <p className="mt-2">
                  {" "}
                  os seguintes parâmtros são permitidos: redirect="true" -
                  redireciona para o carrinho após adiconar produtos. O padrão é
                  "false"
                </p>
              </td>
            </tr>
            <tr className="">
              <td className="text-gray-300">
                <h2 className="text-gray-100 mb-2">
                  Visualização de produtos da lista
                </h2>
                <code className=" bg-gray-800 px-4 py-2 rounded-sm text-gray-200 font-medium">
                  &lt;vtex.cmc:giftListShelfPaged /&gt;
                </code>
                <p className="mt-2">
                  {" "}
                  *ATENÇÃO: É preciso criar um novo template de prateleira e
                  informar o ID para o controle giftListShelfPaged abaixo:
                  &lt;vtex.cmc:giftListShelfPaged
                  layout="INFORMAR_O_ID_DO_NOVO_TEMPLATE_DE_PRATELEIRA_AQUI"
                  itemCount="12" columnCount="3" /&gt;
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
