- new project: 
npm i -g create-react-app
npx create-react-app cmreactjs_mui_stockworkshop --template typescript
npx create-react-app demo1 --template typescript


# vscode extension 
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension vscode-icons-team.vscode-icons
code --install-extension naumovs.color-highlight
code --install-extension esbenp.prettier-vscode
code --install-extension humao.rest-client
code --install-extension riazxrazor.html-to-jsx
code --install-extension christian-kohler.path-intellisense
code --install-extension alexcvzz.vscode-sqlite

# install
yarn add @emotion/react @emotion/styled @mui/icons-material @mui/material @mui/x-data-grid chart.js react-chartjs-2 @react-hook/debounce react-router-dom @types/react-router-dom axios formik formik-material-ui moment react-moment url-join react-number-format @types/redux-logger react-redux redux redux-logger redux-thunk url-join @types/url-join react-iframe

# Page Components
// In Pages
cd src/components/pages
yarn add global create-react-component-folder
npx crcf -f --notest --typescript LoginPage RegisterPage
npx crcf -f --notest --typescript ReportPage StockPage StockCreatePage StockEditPage AboutUs
// In Layouts
cd src/components/layouts
npx crcf -f --notest --typescript Header Menu