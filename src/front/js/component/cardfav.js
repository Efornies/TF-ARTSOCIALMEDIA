import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/cardfav.css";

export const Cardfav = () => {
  return (
    <div
      style={{

        display: "flex",
        height: "25%",
      }}
    >
      <div className="imgfav">
        <img
          className="card-img-top"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/93039862-b614-49e3-a09c-81c017ba95bd/df78fin-dc90e5ff-9af5-44ef-b4f8-86b7d020bfed.jpg/v1/fill/w_1280,h_1358,q_75,strp/yhh_by_diffary1_df78fin-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM1OCIsInBhdGgiOiJcL2ZcLzkzMDM5ODYyLWI2MTQtNDllMy1hMDljLTgxYzAxN2JhOTViZFwvZGY3OGZpbi1kYzkwZTVmZi05YWY1LTQ0ZWYtYjRmOC04NmI3ZDAyMGJmZWQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vuBJZvpLjNnKsO2_ER5ChQFhaWLGakvXEM8nyK4SpCo"
          alt="Card image cap"
        />
        <div className="card-body"></div>
      </div>
      <div className="imgfav">
        <img
          className="card-img-top"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b7aa8b8e-8053-4b28-a20c-fb99e472cce7/dduf2n1-e186e696-27fb-4e3c-9228-4c37c1d5416f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3YWE4YjhlLTgwNTMtNGIyOC1hMjBjLWZiOTllNDcyY2NlN1wvZGR1ZjJuMS1lMTg2ZTY5Ni0yN2ZiLTRlM2MtOTIyOC00YzM3YzFkNTQxNmYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.swEYAl8TmDGFutvBuPkn8DXbwkSMVs7_FvC0vJ3M41w"
          alt="Card image cap"
        />
        <div className="card-body"></div>
      </div>
    </div>
  );
};
