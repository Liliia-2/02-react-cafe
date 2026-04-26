import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';
import { Votes, VoteType } from '../../types/votes';

export default function App() {
    const [votes, setVotes] = useState<Votes>({
        good: 0,
        neutral: 0,
        bad:0,
    })
const handleVote = (type: VoteType) => {
    setVotes(prev => ({
        ...prev,
        [type]: prev[type] + 1,
    }));
}
const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
}
const totalVotes = votes.good + votes.neutral + votes.bad;
const positiveRate = totalVotes ? Math.round((Votes.good / totalVotes) * 100) : 0;
return (
    <div className={css.app}>
        <CafeInfo />

        <VoteOPtions
            onVote={handleVote}
            onReset={resetVotes}
            canReset={totalVotes > 0}
        />
        {totalVotes > 0 ? (
            <VoteStats
                votes={votes}
                totalVotes={totalVotes}
                positiveRate={positiveRate}
            />
        ) : (<Notification />
        )}
    </div>
);
}