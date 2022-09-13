// basic interactions script

const pitch_tab_btn = document.getElementById("tab-pitch");
const detail_tab_btn = document.getElementById("tab-details");
// const updates_tab_btn = document.getElementById("tab-updates");
// const comments_tab_btn = document.getElementById("tab-comments");

const pitch_tab_content = document.getElementById("tab-pitch-content");
const detail_tab_content = document.getElementById("tab-details-content");
// const updates_tab_content = document.getElementById("tab-updates-content");
// const comments_tab_content = document.getElementById("tab-comments-content");

const tab_unselect_class = "tab-unselected";
const tab_content_unselect_class = "tab-content-unselected";

const tab_btns = [pitch_tab_btn, detail_tab_btn];
const tab_contents = [pitch_tab_content, detail_tab_content];

const change_tab = (index) => {
    let i;
    for (i = 0; i < tab_btns.length; i++) {
        if (!tab_btns[i].classList.contains(tab_unselect_class)) tab_btns[i].classList.add(tab_unselect_class);
    }
    for (i = 0; i < tab_contents.length; i++) {
        if (!tab_contents[i].classList.contains(tab_content_unselect_class)) tab_contents[i].classList.add(tab_content_unselect_class);
    }
    tab_btns[index].classList.remove(tab_unselect_class);
    tab_contents[index].classList.remove(tab_content_unselect_class);
};

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < tab_btns.length; i++) {
        tab_btns[i].addEventListener("click", () => change_tab(i));
    }
    change_tab(0);
});

