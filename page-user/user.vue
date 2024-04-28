<template>
    <div class="bory flex flex-col min-h-screen h-full">
      <header class="nav-bar bg-white flex justify-between items-center py-4 px-8">
          <img class="logo" src="/images/logo.jpeg" alt="" width="250" height="50">
          <a class="exit flex items-center" href=""><span class="txt-exit text-xl mr-2">Sair</span><img src="https://api.iconify.design/bitcoin-icons:exit-filled.svg" width="55" alt=""></a>
      </header>
      <nav class="side-bar absolute my-20 bg-gray-800 w-1/5 h-4/5 p-3 text-amber-400 text-2xl">
          <h2 class="text-menu text-center">Menu</h2>
          <hr class="line my-4 border-amber-400">
          <ul class="menu">
                  <li class="menu-item p-4 my-4 text-center">
                      <a class="a text-inherit" href="">
                          <img src="" alt="">
                          <span>Início</span>
                      </a>
                  </li>
                  <li class="menu-item p-4 my-4 text-center">
                      <a href="">
                          <img src="" alt="">
                          <span>Membros</span>
                      </a>
                  </li>
                  <li class="menu-item p-4 my-4 text-center">
                      <a href="">
                          <img src="" alt="">
                          <span>Usuários</span>
                      </a>
                  </li>
                  <li class="menu-item p-4 my-4 text-center">
                      <a href="">
                          <img src="" alt="">
                          <span>E-mails</span>
                      </a>
                  </li>
                  <li class="menu-item p-4 my-4 text-center">
                      <a href="">
                          <img src="" alt="">
                          <span>Relatório</span>
                      </a>
                  </li>
          </ul>    
      </nav>
      <main class="content w-3/5 p-3 flex-grow">
          <article class="search-area ">
              <div class="s-a">
                  <input class="area" type="search" name="" id="">
                  <a href=""><img src="https://api.iconify.design/ic:round-search.svg" alt="" width="35"></a>
          </div>
          </article>
      </main>
      <footer class="base text-center bg-gray-900 text-white py-1 mt-auto">
          <p>Copyright Igreja Batista Farol Joinville</p>
      </footer>
    </div>
  </template>