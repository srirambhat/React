import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    WebCalculator,
    WebAstronomy,
    AndroidAstronomy,
    AndroidCalculator,
} from '../../assets/donetmaui';
import './projects.css';

export default function Projects() {
    const [selected, setSelected] = useState({});
    const navigate = useNavigate();
    const [androidisset, AndroidIsSet] = useState(false);

    const androidProj = [
        {
            id: '1',
            title: 'Smasher',
            text: 'Smasher Manufacturing User Interface',
            link: '/home',
        },
    ];

    const reactProj = [
        {
            id: '1',
            title: 'uFlix',
            text: 'uFlix is similar to Netflix UI',
            link: '/uflix',
        },
        {
            id: '2',
            title: 'Whats GPT3',
            text: 'Whats GPT3 Website only',
            link: '/whatsgpt3',
        },
        {
            id: '3',
            title: 'Crypto Coin tracker',
            text: 'Tracks BIT prices over a period of time.',
            link: '/cryptoline',
        },
        {
            id: '4',
            title: 'Crypto Coin Investment tracker',
            text: 'Tracks your investment in Bitcoin.',
            link: '/cryptopie',
        },
    ];

    const dotnetProj = [
        {
            id: '1',
            title: 'Calculator',
            text: 'Calculator',
            WebimgUrl: WebCalculator,
            AndroidImgUrl: AndroidCalculator,
        },
        {
            id: '2',
            title: 'Astronomy',
            text: 'Astronomy',
            WebimgUrl: WebAstronomy,
            AndroidImgUrl: AndroidAstronomy,
        },
    ];

    useEffect(() => {
        console.log('Android is set:', androidisset);
    }, [androidisset]);

    function handleAndroidClick() {
        AndroidIsSet(!androidisset);
    }

    return (
        <>
            <div className="wsb__projects section__padding" id="projects">
                <div className="wsb__projects-heading">
                    <p>React JS Applications</p>
                    <div className="wsb__projects-container">
                        <p>
                            <select
                                onChange={(e) => {
                                    const c = reactProj?.find(
                                        (x) => x.id === e.target.value
                                    );
                                    console.log(c);
                                    setSelected(c);
                                }}
                                defaultValue="default"
                            >
                                <option value="default">
                                    Choose an option
                                </option>
                                {reactProj
                                    ? reactProj.map((p) => {
                                          return (
                                              <option key={p.id} value={p.id}>
                                                  {p.title}
                                              </option>
                                          );
                                      })
                                    : null}
                            </select>
                        </p>
                    </div>
                </div>
                <div className="wsb__projects-heading">
                    <p>.Net MAUI Applications</p>
                    <p>
                        <select
                            onChange={(e) => {
                                const c = dotnetProj?.find(
                                    (x) => x.id === e.target.value
                                );
                                console.log(c);
                                setSelected(c);
                            }}
                            defaultValue="default"
                        >
                            <option value="default">Choose an option</option>
                            {dotnetProj
                                ? dotnetProj.map((p) => {
                                      return (
                                          <option key={p.id} value={p.id}>
                                              {p.title}
                                          </option>
                                      );
                                  })
                                : null}
                        </select>
                        <input
                            onChange={handleAndroidClick}
                            type="checkbox"
                            id="html"
                            name="fav_language"
                            value="HTML"
                        />
                        <label for="html">Android</label>
                    </p>
                </div>
                <div className="wsb__projects-heading">
                    <p>Android Applications</p>
                    <p>
                        <select
                            onChange={(e) => {
                                const c = androidProj?.find(
                                    (x) => x.id === e.target.value
                                );
                                console.log(c);
                                setSelected(c);
                            }}
                            defaultValue="default"
                        >
                            <option value="default">Choose an option</option>
                            {androidProj
                                ? androidProj.map((p) => {
                                      return (
                                          <option key={p.id} value={p.id}>
                                              {p.title}
                                          </option>
                                      );
                                  })
                                : null}
                        </select>
                    </p>
                </div>
                {selected?.link ? navigate(selected.link) : null}
            </div>
            <div className="wsb__projects section__padding" id="projects">
                {selected?.WebimgUrl || selected?.AndroidImgUrl ? (
                    <img
                        className="wsb__projects-container_groupA"
                        src={
                            androidisset
                                ? selected?.AndroidImgUrl
                                : selected?.WebimgUrl
                        }
                        alt="calculator"
                    />
                ) : null}
                {/* {console.log('imgUrl: ', selected.imgUrl)} */}
            </div>
        </>
    );
}
