let server_address = '//localhost:5000/api';

const routes = {
  '/dashboard': { title: 'My Account', templateId: 'dashboard', init: refresh },
  '/login': { title: 'Login', templateId: 'login' },
  '/credits': { title: 'Credits', templateId: 'credits' },
  '/addTransaction': { title: 'Add Transaction', templateId: 'addTransaction' },
};

let state = Object.freeze({
  account: null
});



const storageKey = 'savedAccount';

function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
  localStorage.setItem(storageKey, JSON.stringify(state.account));

  console.log('State updated:', newData);
}

function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}

// Single Page Application Manager

function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/dashboard');
  }

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);

  if (typeof route.init === 'function') {
    route.init();
  }
}

function navigate(path) {
  window.history.pushState({}, path, window.location.origin + path);
  updateRoute();
}

function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.getAttribute('href'));
}

window.onpopstate = () => updateRoute();
// End of Single Page Application Manager

async function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
  const result = await createAccount(jsonData);

  if (result.error) {
    return updateElement('RegisterError', result.error);
  }


  updateState('account', result);
  navigate('/dashboard');
}

async function createAccount(account) {
  try {
    const response = await fetch(server_address + '/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: account
    });
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}

async function login() {
  const loginForm = document.getElementById('loginForm');
  const user = loginForm.user.value;
  const data = await getAccount(user);

  if (data.error) {
    return updateElement('loginError', data.error);
  }


  updateState('account', data);
  navigate('/dashboard');
}

async function getAccount(user) {
  try {
    const response = await fetch(server_address + '/accounts/' + encodeURIComponent(user));
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}

function logout() {
  updateState('account', null);
  navigate('/login');
}

function createTransactionRow(transaction) {
  const template = document.getElementById('transaction');
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector('tr');
  tr.children[0].textContent = transaction.date;
  tr.children[1].textContent = transaction.object;
  tr.children[2].textContent = transaction.amount.toFixed(2);
  return transactionRow;
}

async function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
    await refresh();
  }
}

async function updateAccountData() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}

async function refresh() {
  await updateAccountData();
  updateDashboard();
}

function updateDashboard() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));
  updateElement('currency', account.currency);

  const transactionsRows = document.createDocumentFragment();
  for (const transaction of account.transactions) {
    const transactionRow = createTransactionRow(transaction);
    transactionsRows.appendChild(transactionRow);
  }
  updateElement('transactions', transactionsRows);
}

async function addTransaction(){
  
  const data = await submitData();
  if (data.error) {
    return updateElement('addTransactionError', data.error);
  }
  updateState('account', data);
  navigate('/dashboard');
}

async function submitData(){
  const addTransactionForm = document.getElementById('addTransactionForm');
  const response = await fetch(`${server_address}/accounts/${state.account.user}/transactions`,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      date: addTransactionForm.date.value,
      object: addTransactionForm.object.value,
      amount: parseFloat(addTransactionForm.amount.value)
    })
  });
  const jsonData = await response.json(); 
  return jsonData;
}



init();
updateRoute();
