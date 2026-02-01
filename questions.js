




// questions.js
const examPapers = {
    paper1: {
        title: "EPS-TOPIK Paper 01",
        time: 05 * 60,
         passMark: 1, 
        questions: [
            {
                q: "학교에 갑니다",
                o: [ { text: "선택 1",audio: "https://raw.githubusercontent.com/ezvinet/EzviNet_Exam/main/audio/track_001.mp3" },"회사","시장","집"],
                a: 0,
                si: "පාසලට යනවා",
                audio: "audio/track_001.MP3",
                img: "img/hanguk.PNG"
            },
            {
                q: "저는 매일 한국어를 ___",
                o: [{ text: "선택 1",img: "img/hanguk.PNG"},{ text: "선택 1",img: "img/hanguk.PNG"},{ text: "선택 1",img: "img/hanguk.PNG"},{ text: "선택 1",img: "img/hanguk.PNG"}],
                a: 1,
                si: "ඉගෙන ගන්නවා",
                img: "img/hanguk.PNG"
            }
        ]
    },
    paper2: {
        title: "EPS-TOPIK Paper 02",
        time: 45 * 60,
         passMark: 2, 
        questions: [
            {
                q: "우유를 마십니다",
                o: ["빵","우유","물","주스"],
                a: 1,
                si: "කිරි බොනවා",
                audio: "audio/milk.mp3"
            },
            {
                q: "한국어를 배우기 ___",
                o: ["쉽습니다","어렵습니다","좋습니다","싫습니다"],
                a: 0,
                si: "ලේසියි"
            }
        ]
    }
};
