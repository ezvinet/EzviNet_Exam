const examPapers = {
    paper1: {
        title: "EPS-TOPIK Paper 01",
        time: 05 * 60, // seconds
        passMark: 6, // Paper-specific pass mark
        questions: [
            {
                q: "(1) 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
                img: "img/학생.PNG",
                o: [
                    "학생",
                    "회사","시장","집"
                ],
				/* [
                    { text: "선택 1", audio: "https://raw.githubusercontent.com/ezvinet/EzviNet_Exam/main/audio/track_001.mp3" },
                    "회사","시장","집"
                ], */
                a: 0,
                si: "ශිෂ්‍යයා",
               /*  audio: "https://raw.githubusercontent.com/ezvinet/EzviNet_Exam/main/audio/track_001.mp3",
                img: "img/hanguk.PNG" */
            },
            {
                q: "(2) 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
				img: "img/선생님.PNG",
                o: [
                    "소방관","점원","선생님","의사"
                ],
                a: 2,
                si: "ගුරුවරයා",
                /* img: "img/hanguk.PNG" */
            },
			 {
                q: "(3) 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
				img: "img/회사원.PNG",
                o: [
                    "학생","회사원","간호사","어부"
                ],
                a: 1,
                si: "සමාගමක සේවකයා",
                /* img: "img/hanguk.PNG" */
            },
			 {
                q: "(4) 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
				img: "img/근로자.PNG",
                o: [
                    "요리사","간호사","기술자","근로자"
                ],
                a: 3,
                si: "කම්කරුවා / සේවකයා",
                /* img: "img/hanguk.PNG" */
            },
			 {
                q: "(5) 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
				img: "img/경찰관.PNG",
                o: [
                    "소방관","공무원","운전기사","경찰관"
                ],
                a: 3,
                si: "පොලිස් නිලධාරියා",
                /* img: "img/hanguk.PNG" */
            },
			 {
                q: "(6) 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
				img: "img/소방관.PNG",
                o: [
                    "소방관","공무원","운전기사","경찰관"
                ],
                a: 0,
                si: "ගිනි නිවීමේ නිලධාරියා",
                /* img: "img/hanguk.PNG" */
            },
			 {
                q: "(7) 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
				img: "img/공무원.PNG",
                o: [
                    "목수","요리사","간호사","공무원"
                ],
                a: 3,
                si: "රාජ්‍ය සේවකයා",
                /* img: "img/hanguk.PNG" */
            },
			 {
                q: "(8) 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
				img: "img/점원.PNG",
                o: [
                    "의사","점원","농부","어부"
                ],
                a: 1,
                si: "වෙළඳසැල් සේවකයා",
                /* img: "img/hanguk.PNG" */
            },
			 {
                q: "(9) 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
				img: "img/의사.PNG",
                o: [
                    "의사","목수","농부","어부"
                ],
                a: 0,
                si: "වෛද්‍යවරයා",
                /* img: "img/hanguk.PNG" */
            },
			{
                q: "(10) 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
				img: "img/간호사.PNG",
                o: [
                    "간호사","공무원","선생님","소방관"
                ],
                a: 0,
                si: "හෙදිය",
                /* img: "img/hanguk.PNG" */
            }
        ]
    }
            };
