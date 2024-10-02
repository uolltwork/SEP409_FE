// KhoaTD - options 1: Update sdb theo weeks chứa dates, trong dates chứ slots
const registerBooks = {
  code: 200,
  status: true,
  message: "ok",
  data: {
    schoolYear: "2023-2024",
    fromDate: "03/04/2024",
    toDate: "15/04/2024",
    class: "12C10",
    detail: [
      {
        id: 1,
        date: "03/04/2024",
        weekDate: "Thứ 2",
        slots: [
          {
            slot: 1,
            subject: "Ngữ Văn",
            teacher: "DaQL",
            slotByLessonPlans: 1,
            numberOfAbsent: 1,
            memberAbsent: ["Qhuyền ngoài xa "],
            title: "NLXH: Chiếc thuyền ngoài xa",
            note: "Tích cực",
            rating: "A",
          },
          {
            slot: 2,
            subject: "Ngữ Văn",
            teacher: "DaQL",
            slotByLessonPlans: 1,
            numberOfAbsent: 2,
            memberAbsent: ["Quyên", "Nghia"],
            title: "NLXH: Chiếc thuyền ngoài xa",
            note: "Tích cực",
            rating: "A",
          },
          {
            slot: 3,
            subject: "Vật lý",
            teacher: "DaQL",
            slotByLessonPlans: 2,
            numberOfAbsent: 1,
            memberAbsent: ["Quyên"],
            title: "NLXH: Chiếc thuyền ngoài xa",
            note: "Tích cực",
            rating: "A",
          },
          {
            slot: 5,
            subject: "SHDC",
            teacher: "DaQL",
            slotByLessonPlans: 1,
            numberOfAbsent: 0,
            memberAbsent: [],
            title: "NLXH: Chiếc thuyền ngoài xa",
            note: "Tích cực",
            rating: "A",
          },
        ],
      },
      {
        id: 2,
        date: "05/04/2024",
        weekDate: "Thứ 3",
        slots: [
          {
            slot: 3,
            subject: "Vật lý",
            teacher: "DaQL",
            slotByLessonPlans: 2,
            numberOfAbsent: 1,
            memberAbsent: ["Quyên"],
            title: "NLXH: Chiếc thuyền ngoài xa",
            note: "Tích cực",
            rating: "A",
          },
          {
            slot: 4,
            subject: "GDCD",
            teacher: "DaQL",
            slotByLessonPlans: 4,
            numberOfAbsent: 1,
            memberAbsent: ["Quyên"],
            title: "NLXH: Chiếc thuyền ngoài xa",
            note: "Tích cực",
            rating: "A",
          },
          {
            slot: 5,
            subject: "SHDC",
            teacher: "DaQL",
            slotByLessonPlans: 3,
            numberOfAbsent: 1,
            memberAbsent: ["Quyên"],
            title: "NLXH: Chiếc thuyền ngoài xa",
            note: "Tích cực",
            rating: "B",
          },
        ],
      },
      {
        id: 3,
        date: "06/04/2024",
        weekDate: "Thứ 4",
        slots: [
          {
            slot: 1,
            subject: "Vật lý",
            teacher: "DaQL",
            slotByLessonPlans: 1,
            numberOfAbsent: 1,
            memberAbsent: ["Quyên"],
            title: "NLXH: Chiếc thuyền ngoài xa",
            note: "Tích cực",
            rating: "A",
          },
          {
            slot: 2,
            subject: "Vật lý",
            teacher: "DaQL",
            slotByLessonPlans: 1,
            numberOfAbsent: 1,
            memberAbsent: ["Quyên"],
            title: "NLXH: Chiếc thuyền ngoài xa",
            note: "Tích cực",
            rating: "D",
          },
          {
            slot: 3,
            subject: "Vật lý",
            teacher: "DaQL",
            slotByLessonPlans: 1,
            numberOfAbsent: 1,
            memberAbsent: ["Quyên"],
            title: "NLXH: Chiếc thuyền ngoài xa",
            note: "Tích cực",
            rating: "A",
          },
          {
            slot: 4,
            subject: "GDCD",
            teacher: "DaQL",
            slotByLessonPlans: 5,
            numberOfAbsent: 1,
            memberAbsent: ["Quyên"],
            title: "NLXH: Chiếc thuyền ngoài xa",
            note: "Tích cực",
            rating: "A",
          },
          {
            slot: 5,
            subject: "SHDC",
            teacher: "DaQL",
            slotByLessonPlans: 2,
            numberOfAbsent: 1,
            memberAbsent: ["Quyên"],
            title: "NLXH: Chiếc thuyền ngoài xa",
            note: "Tích cực",
            rating: "A",
          },
        ],
      },
      {
        id: 4,
        date: "07/04/2024",
        weekDate: "Thứ 5",
        slots: [
          {
            slot: 1,
            subject: "Vật lý",
            teacher: "DaQL",
            slotByLessonPlans: 1,
            numberOfAbsent: 1,
            memberAbsent: ["Quyên"],
            title: "NLXH: Chiếc thuyền ngoài xa",
            note: "Tích cực",
            rating: "A",
          },
          {
            slot: 2,
            subject: "Vật lý",
            teacher: "DaQL",
            slotByLessonPlans: 1,
            numberOfAbsent: 4,
            memberAbsent: ["Quyên", "Khoa", "Hieu", "Uol"],
            title: "NLXH: Chiếc thuyền ngoài xa",
            note: "Tích cực",
            rating: "C",
          },
          {
            slot: 3,
            subject: "Vật lý",
            teacher: "DaQL",
            slotByLessonPlans: 1,
            numberOfAbsent: 1,
            memberAbsent: ["Quyên"],
            title: "NLXH: Chiếc thuyền ngoài xa",
            note: "Tích cực",
            rating: "A",
          },
          {
            slot: 4,
            subject: "GDCD",
            teacher: "DaQL",
            slotByLessonPlans: 2,
            numberOfAbsent: 3,
            memberAbsent: ["Quyên", "Khoa", "Hieu"],
            title: "NLXH: Chiếc thuyền ngoài xa",
            note: "Tích cực",
            rating: "A",
          },
          {
            slot: 5,
            subject: "SHDC",
            teacher: "DaQL",
            slotByLessonPlans: 1,
            numberOfAbsent: 1,
            memberAbsent: ["Quyên"],
            title: "NLXH: Chiếc thuyền ngoài xa",
            note: "Tích cực",
            rating: "A",
          },
        ],
      },
      {
        id: 5,
        date: "08/04/2024",
        weekDate: "Thứ 6",
        slots: [
          {
            slot: 4,
            subject: "GDCD",
            teacher: "DaQL",
            slotByLessonPlans: 1,
            numberOfAbsent: 1,
            memberAbsent: ["Quyên"],
            title: "NLXH: Chiếc thuyền ngoài xa",
            note: "Tích cực",
            rating: "A",
          },
          {
            slot: 5,
            subject: "SHDC",
            teacher: "DaQL",
            slotByLessonPlans: 1,
            numberOfAbsent: 1,
            memberAbsent: ["Quyên"],
            title: "NLXH: Chiếc thuyền ngoài xa",
            note: "Tích cực",
            rating: "A",
          },
        ],
      },
      {
        id: 6,
        date: "09/04/2024",
        weekDate: "Thứ 7",
        slots: [
          {
            slot: 1,
            subject: "Vật lý",
            teacher: "DaQL",
            slotByLessonPlans: 1,
            numberOfAbsent: 2,
            memberAbsent: ["Quyên", "Nghia"],
            title: "NLXH: Chiếc thuyền ngoài xa",
            note: "Tích cực",
            rating: "A",
          },
          {
            slot: 2,
            subject: "Vật lý",
            teacher: "DaQL",
            slotByLessonPlans: 1,
            numberOfAbsent: 1,
            memberAbsent: ["Quyên"],
            title: "NLXH: Chiếc thuyền ngoài xa",
            note: "Tích cực",
            rating: "A",
          },
          {
            slot: 3,
            subject: "Vật lý",
            teacher: "DaQL",
            slotByLessonPlans: 1,
            numberOfAbsent: 1,
            memberAbsent: ["Quyên"],
            title: "NLXH: Chiếc thuyền ngoài xa",
            note: "Tích cực",
            rating: "A",
          },
        ],
      },
    ],
  },
};

const registerBook = {
  code: 200,
  status: true,
  message: "ok",
  data: {
    schoolYear: "2023-2024",
    class: "12C10",
    detail: {
      slot: 1,
      subject: "Ngữ Văn",
      slotByLessonPlans: 1,
      numberOfAbsent: 1,
      memberAbsent: ["Quyên"],
      title: "NLXH: Chiếc thuyền ngoài xa",
      note: "Tích cực",
      rating: "A",
    },
  },
};

export { registerBook, registerBooks };
