// // basic interactions script

// const pitch_tab_btn = document.getElementById("tab-pitch");
// const detail_tab_btn = document.getElementById("tab-details");
// const updates_tab_btn = document.getElementById("updates-pitch");
// const comments_tab_btn = document.getElementById("comments-pitch");

// const pitch_tab_content = document.getElementById("tab-pitch-content");
// const detail_tab_content = document.getElementById("tab-details-content");
// const updates_tab_content = document.getElementById("updates-pitch-content");
// const comments_tab_content = document.getElementById("comments-pitch-content");

// const tab_unselect_class = ".tab-unselected";
// const tab_content_unselect_class = ".tab-content-unselected";

// const tab_btns = [pit_tab_btn, detail_tab_btn, updates_tab_btn, comments_tab_btn];
// const tab_contents = [pitch_tab_btn, detail_tab_content, updates_tab_content, comments_tab_content];

// const change_tab = (selected_tab_index) => {
//     for (tb in tab_btns) {
//         if (!tb.classList.contains(tab_unselect_class)) tb.classList.add(tab_unselect_class);
//     }
//     for (tc in tab_contents) {
//         if (!tc.classList.contains(tab_content_unselect_class)) tc.classList.add(tab_content_unselect_class);
//     }
//     if (selected_tab_index) {
//         tab_btns[selected_tab_index].classList.remove(tab_content_unselect_class);
//         tab_contents[selected_tab_index].classList.remove(tab_content_unselect_class);
//     }
// };

// document.addEventListener("DOMContentLoaded", () => {
//     for (btn in tab_btns) {
//         btn.addEventListener("click", change_tab);
//     }
//     for (btn in tab_btns) {
//         change_tab(tab_btns[0]);
//     }
// });

