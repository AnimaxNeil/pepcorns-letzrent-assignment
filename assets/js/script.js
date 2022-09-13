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
const hide_content_class = "hide-content";

const tab_btns = [pitch_tab_btn, detail_tab_btn];
const tab_contents = [pitch_tab_content, detail_tab_content];

const company_info_share_btn = document.getElementById("company-info-share-btn");
const company_info_share_window = document.getElementById("company-info-share-window");
const company_info_share_window_menu = company_info_share_window.getElementsByClassName("share-menu")[0];
const company_info_share_url_copy = document.getElementById("company-info-share-url-copy");
const company_info_share_close_btn = document.getElementById("company-info-share-close-btn");

const change_tab = (index) => {
    let i;
    for (i = 0; i < tab_btns.length; i++) {
        if (!tab_btns[i].classList.contains(tab_unselect_class)) tab_btns[i].classList.add(tab_unselect_class);
    }
    for (i = 0; i < tab_contents.length; i++) {
        if (!tab_contents[i].classList.contains(hide_content_class)) tab_contents[i].classList.add(hide_content_class);
    }
    tab_btns[index].classList.remove(tab_unselect_class);
    tab_contents[index].classList.remove(hide_content_class);
};

const toggle_menu = (menu) => {
    menu.classList.toggle(hide_content_class);
    return !menu.classList.contains(hide_content_class);
}

const toggle_share_window = () => {
    const active = toggle_menu(company_info_share_window);
    document.body.style.overflowY = active ? "hidden" : "scroll";
}

document.addEventListener("DOMContentLoaded", () => {

    for (let i = 0; i < tab_btns.length; i++) {
        tab_btns[i].addEventListener("click", () => change_tab(i));
    }
    change_tab(0);

    company_info_share_btn.addEventListener("click", toggle_share_window);
    company_info_share_window.addEventListener("click", toggle_share_window);
    company_info_share_close_btn.addEventListener("click", toggle_share_window);
    company_info_share_window_menu.addEventListener("click", (e) => e.stopPropagation());
    company_info_share_url_copy.addEventListener("click", () => {
        navigator.clipboard.writeText(window.location.href);
        toggle_share_window();
    })
    company_info_share_window.classList.add(hide_content_class);

});

