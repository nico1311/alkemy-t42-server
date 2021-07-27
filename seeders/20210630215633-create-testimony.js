'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Testimonials',
      [
        {
          name: 'Testimony 1',
          image:
            'https://lh3.googleusercontent.com/fife/AAWUweUnCvgAP7KEUlHcvM9DX6EcH8iNlcduPuHakxJxW4E__ERGpd_m9MEJQExfSLA63-iL8t0FxAyx9qlPeElYYoIEeFbguHGaXlSGjj06VXtvpgc_fDDGH8v5t4VjSZfGnY9waI10rFjK4IqLKNH-z6AfPdHpuHdEP_gYqLm5fBuodzz86uVXDu39WQLiYmuj7qj18DRFkMUJPVM8GrLtaAGN91LUkXudWX9I0Zr_3qLg1SrmJNxXlCOQC1LYst78fHn9ktcVZMyo9U1eLIJ3u88Wg219yGn2WyVbpkic_eTfJVVCO8YFxgyWpJmHTEc4y-uWM_gS0xKkM3YpXqKm6Bxt3b0dUupT-TriqYCk_ot9lyFX8KbM-ofori8pXJHWF0RxGfVONKYlgGg-RCX9KC1R4U9-mor0sfWZs5RbqnQAwLMCGdxqJBX90gzDQwuS8wk2bzfuj7YLV6PSBcTfBSpuAzkdQrKqLmog_gIskPhvzC0toxWkCcwU3m6CGhlH1GQ4BIxDYzZ7Lx_Q-Sn7cZN1KpnMhu0hmup2BlYWpzSMwGy0pxlb3UEDNqc7kM-74otKOm88Voe7Yrm0pF6VfPQfxgKiP1qGSt7dQtfxhrat9XnF2QBnUWcjAJQVIaofIy1LIeCsnv1_3eFwxG5qS3tylOU2rxj3E7NykJ5sq1bAs5yfuVb9rQOB5FjuFYYoUA76FzqTV-ZzOov6E0G3DqHumiaUHMHHcw=w280-h266-p-k-nu-ft',
          content: 'Content Testimony 1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Testimony 2',
          image:
            'https://lh3.googleusercontent.com/fife/AAWUweWYJq5BbDJiRCz3YqaFTm5o66HcKuIxayrQgO677Exst14Rayf4FlpRSZpYUsoCogrvkp4Ilx71U_BgiZZpbjKuvuUwbXA2FffeT9F7z7fwLRR5tLrzjmYYihMvmWydHu3GCRbxykUMboK4xnhE4NmyjK77bp01o0KiCSmB7r2DVBDIWmLlNlX6ATGoFNGJDpPOPJJvUkGsZjHV7Oym5qebc2L2AbvNdvD-DdYA7NjKu9ECKqnWT4q3hhSMd3NQw0fCp1QZWdmhOn9ahrr_uG-ie5aPw8IEjk_7wpLi25G38KErPwF4AoZYQ9zmYH0MXIz7XtOius8hUBca7GsiL9n6lVM2jbz8hKrgWSmfVBKQRLu_ubm9oZ2mcdl_HhAYpazHu5quQRDAokh_vXMzhUGRzq24tuZT3LpFau3m1qprS0mFeuKc-BnLiWx7R43wWvDvg458XnpdRsBfn3HMxIOA4aw3_m9exM6QG9tbv81x6swF5f-cSmGxHqm3jmqhoxcIV2fgZRuvdlAIQhQObz_bi-rQs417Mlh_reTG_ZoIVyxnkace62rQknoTLYRes3b9EdZNVJ1MDUcPkvfSm-XqB0AyqQmoIv1zxB6AoD2o2Fyt-0VdBWALBrQPsZanfGiadPPJP8WSA07fhSQEowa9qYlE8ZvNync0hWBJHIRMQhkApWB5oWrSa5MNtmX7xmXpypxNdYj4WwsoviaCiYZcdsVl2iHAlw=w280-h266-p-k-nu-ft',
          content: 'Content Testimony 2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Testimony 3',
          image:
            'https://lh3.googleusercontent.com/fife/AAWUweUYFm9exeAvSQDm7JucojEtn8ArDWx4uPl3mLo9p4-0eU2gvVGnHzWhgf81maUaiwNsxr5D4vLO9TxC_44w-ewBO_Lj4fNixbNQFyYE9-Xun8J-wOUavQETLTA1WF_bUvv2Oca0e4_hAG6OqXuujZWFli0P1k_2Th7DP4CCCEElTmkZhJYpQnqwn-eUxjT_x6qaZVQao0gAOEJdSXfrCM2Zv0ez4m3K5ZyDmwr8hJCJ0HOaA2-QKq45j87EO5Q42h_Zzwiha8IEdagZuQavdLY5X92pO2q-jQ40hn2Vi97KiBYFJLyfpmSpCIcwqQiJ8ckcXUyQyoJL8LgJL6ukXlSZiS0AMT80zffRVg9pjP2X4VsOhQyYwDQHBAVUREM9hzBlF0kV1Y3jWD6wInAjrqpa6lznijSLoQuiGwlVHn3jn2HAqjgxJR4q7rRJMyfegrPJJBdI-aO2nwQLtDrGHK2BOG6LAfXJcR8Neb_oi3cIF-9uh4VW0we1pMkRvqgvj5qMm7BNLsv9RyR4hG0PoHTcVBI8c1B883PDL1eT5X3zrYcqhnq2pZXjRZmh1Xlu_yqzCm9jEGbKH763ON3weg7Ap13uLtD78ATrAsoUckye2SOrOuYgtpFQCKsbbxDLG_FIbLJCdbxg7gXJ_mYC7MucDKx3XD8Qx47t8NWI2HEv_JaBnjNUTzxuR3TtQDxSD8Pg7NP_LSOggg5rZTqQKusgBPcRY8496w=w280-h266-p-k-nu-ft',
          content: 'Content Testimony 3',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Testimony 4',
          image:
            'https://lh3.googleusercontent.com/fife/AAWUweXSTSn6WMfj5JAjIeZv9N2qEAdsbq9TXbyb_pVYSklw3Tw9reZExM7zIzfTZleh6u8qOCBqY0dDoVWar9p05QzvdF2uDKpLt2sdgY2EsgHbF_3Z8mpGTdWccZEFtBmG0B1c58L-6th0dnr2inXYezud5GwRlPH8ltJvOtNKxXQiBaL14TDRhzZfxQV6yTSgeBKAfBVw9_qfV-qe7mqhaC5ETZdGUjX9N_4tyDpc_hbB9omz-vZW8Ww2Srn9jDgNiEHcAoC9V4i-2Z6ySAUheULoSGU236GXir2cd4bpeeHlot0vjEhAQqu0-EkCM3jhCDdpezcaEXXRCQQSGyG6FlDMwLH3BcE_b6bJsSKgucvXnsF_HHYJD3h3nkkcF8FR6n_snGIk-fXI5NT6QJ8PpkBMZWZPXlR4bYZhVhxpyio8uXaBgAcU3dNBkSUdvkeSnbuN2UZR2rMo6661RqhF2WA4YUwlgHc6Ziii1Ib3Qf2Fdmg6GTrm0WRFdEW9IWP0RkSoRmCOyfSnrxZEHZ87mkYT9OGsfe3MEdXV7iphX83CL8wJHnoeiRLnyRCCo7JCi90of98uqPG583AqXy99qDc3QQX76vHoeduUs2tRdnOGfk-8IQeT5_WPPwjrZpO2Nr7vphbB_fVuwd_N0kBSiXsqPz2z7j7coaXPZOD59RpT8JBIhTelyrIQIxd-mqY7hgAcSthaeIhh11hpbUmPMur0OwoGbD7eVg=w280-h266-p-k-nu-ft',
          content: 'Content Testimony 4',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Testimony 5',
          image:
            'https://lh3.googleusercontent.com/fife/AAWUweWXHh6QU-ymTAdedSOk-UvW3HSjzCGUNhMLpR4q00A_mVg4juI79RCyv0sEHQr32viuwEu73JMG2JcNhDDjdM0WXgLveCH8cstbPOVtx75OheE5zIYuGZWlnlK7aU_VtckxvrwDu2MdbvxxkOkKIjVv3Qpyt8uihx2XiSmIPRBTl21R13_S1-7FYtVdr0ZGFpYd_squv0qAGwlV52RQSFCfgyhqQ0nkzYD7rHmVC_-epvG6MhC9MJOdiPkxt9CO0Dtn4p_HyW8ptfRYb9Q5g3hs0V98AfRcvJtr6G4FXXVXR0SFHv2LxRPRUTmnYf4x5PWiCjmcTaQX7g5As3jBFId1ehosYFIQVzQ3PmPeBiVDaP7nSqq5tK_mAEa6NR8UdW1OvmQwj4f_L2obS6ouBlL8uq1510HNdvigZXA26zK1qD4l1xXntlmFShhgXEoZCIw2_zaSbCQAvVmlct4tRsBsVs3un3M6ldBRxxyFt5ASL6m8H3jOPogweNxJrzpanYUXIUOMd2FQzfLgB-p7sn09I6W3ub9Jbq1_CMsA81BZAo-D6Oi3DGTWNj-kyRlH-N9sHZLQ82uKLaKNZUV2fxxmCZhphKLj4ztpUWsVGmLDAGAlZm5vPkDawaZ23EXAB_sbleTLsiJGEzurQy49693tdH804Mt7g_FKfRCEI8FDzC3shvXXi1gmFCr-04B5LqSicT-TAyFIMY7xmq8QjElfz9NOWrvIUQ=w280-h266-p-k-nu-ft',
          content: 'Content Testimony 5',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Testimony 6',
          image:
            'https://lh3.googleusercontent.com/fife/AAWUweU-Qogv5hPvDxaPV_-RnOmKwOHVHKPGy3pX_H_Mhker3Det2IKvKy_72eWcvQXTDFgifaWpThcaikIJCGfJO-AI1zBo9n-r3eaWb7uSUR9KTIt2xYaBDlSyl8AnfpTDcNJRENOAECDmhsr6QfKiJn7iFZKZkc0BcrtYMj1einzUufLEc0zsBnmCAg1B9IchjBel-ToDysRAckRvD3PSAvBvk6deQjIpcAOCKzE8ehoo6I1BXPQ6Zf5HG6vNaSf0Da0RHjUlcR19XWkuMBBZKVp48jMwLpqCSfOjPLLloMBBnXe8eEccb6qYG49Vt63Ob6kphslK5EPSeZ_kpoBqEuuBXNfuZrebHfYojAAItMDu0VLdCeqzJe_jo0P7uqzlnIxWrSTzPum8pGCg79M3o4uqIu9InEHJCQVD-fwbhEx0hHuCgzRcMbsrcAhpUFT7zxcIHJZdE2_-uOiR3wOHo2tdGD6mdjGZEkT4RaJoYlmpkznEJBTyL95VKTs6PvHb5tUxGOa7qOISvpKxaML1W3PIL06W_woaq-wOgjAI4bzk5liTgJo33QlBfkayOPcoUBijbmsZLN3hpCcP3PG5tcYbR4oQ7OvbPzueYGjQZo6GRqrZcaKtZXB_ma_giw8zbSgf_GZgdCLFUekURBchybYRkopONL_BBecqag-Rq0KO-M1e4r2-JMhjBgJDUqQaQfoRcQgxcfK3IXG3fY7L_yMqZYkFaGvhjQ=w280-h266-p-k-nu-ft',
          content: 'Content Testimony 6',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Testimonials', null, {});
  }
};
