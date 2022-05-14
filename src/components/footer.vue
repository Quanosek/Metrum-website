<template>
    <footer>

        <p>Strona stworzona przez: <a href="https://github.com/Quanosek">Quanosek</a> & <a
                href="https://github.com/Karroteu">Karroteu</a></p>
        <p class="copyrights">Wszelkie prawa zastrzeżone ©&nbsp;2022</p>

    </footer>
</template>

<script>
export default {
    name: 'componentFooter',
};
</script>

<style lang="scss" scoped>
footer {
    z-index: 10;
    padding: 0 3%;
    height: 70px;
    width: 94%;

    background-color: var(--secondary);
    display: flex;

    justify-content: space-between;
    align-items: center;
    font-size: .9rem;
}

a:hover {
    text-decoration: underline;
}

.copyrights {
    font-size: .8rem;
    opacity: .8;
}

@media (max-width: 768px) {
    footer {
        height: 80px;

        justify-content: center;
        flex-direction: column;
        font-size: .8rem;

        p {
            margin: 6px 0;
        }
    }

    .copyrights {
        font-size: .7rem;
    }
}
</style>