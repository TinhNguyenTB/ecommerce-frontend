import '@/App.css';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import SummaryApi from '@/common';
import Context from '@/context';

function App() {

  const fetchUserAccount = async () => {
    const res = await fetch(SummaryApi.account.url, {
      method: SummaryApi.account.method,
      credentials: 'include'
    });
    const dataRes = await res.json();
    // console.log(dataRes);
  }

  useEffect(() => {
    fetchUserAccount();
  }, [])

  return (
    <>
      <Context.Provider value={{
        fetchUserAccount
      }}>
        <ToastContainer />
        <Header />
        <main className='min-h-[calc(100vh-120px)]'>
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
