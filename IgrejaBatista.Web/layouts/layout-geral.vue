<template>
    <div class="bory flex flex-col min-h-screen">
        <header class="nav-bar bg-white flex justify-between items-center py-3 px-8">
            <img class="logo" src="./images/logo.jpg" alt="Logo Igreja Batista Farol Joinville" width="250" height="50">
            <a class="exit flex items-center " href="/pages/login/index.vue">
                <span class="txt-exit text-xl ml-1 mr-2 text-gray-900">Sair</span>
                <img src="https://api.iconify.design/bitcoin-icons:exit-filled.svg" width="55" alt="Ícone de saída">
            </a>
        </header>
  
        <div class="flex flex-col md:flex-row flex-1">
            <aside class="side-bar md:w-1/5 bg-gray-800 dark:bg-gray-900 text-amber-400 text-lg md:text-2xl text-center">
                <h2 class="text-menu pt-2">Menu</h2>
                <hr class="line my-4 bg-amber-400 h-[2px] border-none">
                <ul class="menu flex-1">
                    <li class="menu-item py-4 px-2 my-4 relative">
                        <a class="a text-inherit" href="">
                            <img class="icon float-left m-0" src="https://api.iconify.design/material-symbols:home-outline-rounded.svg?color=%23d0b401" alt="Ícone da página inicial" width="30">
                            <span>Início</span>
                        </a>
                        <div class="hvItem absolute inset-x-0 bottom-0 h-1 bg-amber-400 w-0 transition-all duration-300 origin-left"></div>
                    </li>
                    <li class="menu-item py-4 px-2 my-4 relative">
                        <a href="">
                            <img class="icon float-left" src="https://api.iconify.design/fa6-solid:users.svg?color=%23d0b401" alt="Ícone da página de membros" width="30">
                            <span>Membros</span>
                        </a>
                        <div class="hvItem absolute inset-x-0 bottom-0 h-1 bg-amber-400 w-0 transition-all duration-300 origin-left"></div>
                    </li>
                    <li class="menu-item py-4 px-2 my-4 relative">
                        <a href="">
                            <img class="icon float-left" src="https://api.iconify.design/material-symbols:person.svg?color=%23d0b401" alt="Ícone da página de usuários" width="30">
                            <span>Usuários</span>
                        </a>
                        <div class="hvItem absolute inset-x-0 bottom-0 h-1 bg-amber-400 w-0 transition-all duration-300 origin-left"></div>
                    </li>
                    <li class="menu-item py-4 px-2 my-4 relative">
                        <a href="">
                            <img class="icon float-left" src="https://api.iconify.design/material-symbols-light:stacked-email-rounded.svg?color=%23d0b401" alt="Ícone da página de e-mails" width="30">
                            <span>E-mails</span>
                        </a>
                        <div class="hvItem absolute inset-x-0 bottom-0 h-1 bg-amber-400 w-0 transition-all duration-300 origin-left"></div>
                    </li>
                    <li class="menu-item py-4 px-2 mt-4 relative mb-16">
                        <a href="">
                            <img class="icon float-left" src="https://api.iconify.design/oui:app-reporting.svg?color=%23d0b401" alt="Ícone da página de relatórios" width="30p">
                            <span>Relatório</span>
                        </a>
                        <div class="hvItem absolute inset-x-0 bottom-0 h-1 bg-amber-400 w-0 transition-all duration-300 origin-left"></div>
                    </li>
                </ul>
                <div class="flex justify-start items-center p-3">
                    <ColorMode />
                </div>
            </aside>
  
            <main class="content w-full md:w-4/5 py-3 px-12 flex-grow flex flex-col items-center">
                <article class="search-area flex dark:border-gray-200 border bg-gray-800 dark:bg-gray-950 p-1 rounded-3xl w-full md:w-7/12 items-center">
                    <input class="area p-2 text-gray-950 bg-gray-200 dark:bg-gray-400 rounded-2xl h-7 w-full md:w-3/5 ml-auto focus:outline-none" type="search" name="" id="" placeholder="Buscar. . .">
                    <a class="search-icon mr-auto" href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#e0c200" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/></svg></a>
                </article>
                <article>
                    <slot></slot>
                </article>
            </main>
        </div>

        <footer class="bg-gray-900 min-h-9 flex justify-center items-center">
            <p class="font-semibold text-gray-200">© Copyright igreja Batista Farol Joinville</p>
        </footer>
    </div>
</template>

<style scoped>
    .menu-item:hover > .hvItem {
        width: 100%;
    }
    .exit:hover{
        background-color: #D6D3D1;
        border-radius: 20px;
    }
</style>

<script>
    
</script>