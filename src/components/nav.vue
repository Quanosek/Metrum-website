<template>
    <nav>
        <div class="nav_lp">
            <router-link to="/" draggable="false">

                <img id="logo" src="@/assets/logo.jpg" alt="logo" draggable="false">
                <h1>Metrum</h1>

            </router-link>
        </div>

        <div class="nav_rp">

            <div class="menu" @click="isActive = !isActive" :class="isActive ? 'active' : ''">

                <router-link to="/">
                    <div class="nav_item button_primary">Strona&nbsp;główna</div>
                </router-link>

                <router-link to="/info">
                    <div class="nav_item button_primary">Informacje</div>
                </router-link>

                <router-link to="/commands">
                    <div class="nav_item button_primary">Lista komend</div>
                </router-link>

            </div>

            <div class="hamburger" @click="isActive = !isActive" :class="isActive ? 'active' : ''">
                <div class="bar"></div>
            </div>

        </div>
    </nav>
</template>

<script>
export default {
    name: 'componentNav',
    data() {
        return {
            isActive: false,
        };
    },
};
</script>

<style lang="scss" scoped>
nav {
    position: fixed;
    z-index: 1;
    padding: 0 3%;
    height: 60px;
    width: 94%;

    background-color: var(--secondary);

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav_lp a {
    font-size: .9rem;

    display: flex;
    align-items: center;

    gap: 1rem;
}

#logo {
    height: 40px;
    border-radius: 5px;
}

.menu {
    display: flex;
    gap: 1rem;
}

/* hamburger menu */

.hamburger {
    display: none;
    cursor: pointer;
    padding: 10px 5px;
}

.bar {
    position: relative;
    width: 25px;
    height: 3px;
    margin: 5px auto;

    background-color: white;
    transition: all .3s ease-in-out;

    &::before,
    &::after {
        content: "";
        position: absolute;
        width: 25px;
        height: 3px;

        background-color: white;
        transition: all .3s ease-in-out;
    }

    &::before {
        transform: translateY(-10px);
    }

    &::after {
        transform: translateY(10px);
    }
}

.hamburger.active .bar {
    background: transparent;

    &::before {
        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
    }
}

/* mobile menu */

@media (max-width: 768px) {
    .hamburger {
        display: block;
    }

    .menu {
        z-index: 2;
        position: fixed;
        right: -100%;
        top: 60px;
        padding: 8px 0 100vh 0;
        width: 100%;

        flex-direction: column;
        align-items: center;

        transition: .3s;
        gap: 0;

        &.active {
            right: 0;
            background-color: var(--secondary);
        }
    }

    .nav_item {
        width: 200px;
        margin: 8px;

        display: flex;
        justify-content: center;

        font-size: 1.2rem;
    }
}
</style>