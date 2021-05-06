import { useState } from "react";
import { useSprings } from "react-spring";
import { useGesture } from "react-with-gesture";
import CardRecommendation from "../CardRecommendation";

const to = (i: number) => ({
    x: 0,
    y: 0,
    scale: 1,
    delay: i * 100,
});
const from = () => ({ scale: 1.25, y: -1000, x: 0 });

const Deck = (props: any) => {
    const { data, finishSelection } = props
    const [gone] = useState(() => new Set());
    const [selection] = useState<string[]>([]);
    const [propsSpring, set] = useSprings(data.length, (i) => ({
        ...to(i),
        from: from(),
    }));
    const move = (index: number, right: boolean) => {
        gone.add(index);
        set((i) => {
            if (index !== i) return;
            const x = (200 + window.innerWidth) * (right ? 1 : -1);
            if (right)
                selection.push(data[index]);

            return {
                x,
                delay: undefined,
                config: { friction: 50, tension: 200 },
            };
        });
        if (gone.size === data.length) finishSelection(selection);
    };
    const bind = useGesture(
        ({
            args: [index],
            down,
            delta: [xDelta],
            distance,
            direction: [xDir],
            velocity,
        }) => {
            const trigger = velocity > 0.2;

            const dir = xDir < 0 ? -1 : 1;

            if (!down && trigger) gone.add(index);

            set((i) => {
                if (index !== i) return;
                const isGone = gone.has(index);

                const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;
                if (isGone && dir === 1)
                    selection.push(data[index]);

                return {
                    x,
                    delay: undefined,
                    config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
                };
            });
            if (!down && gone.size === data.length) {
                finishSelection(selection);
            }
        }
    );

    return <>
        { propsSpring.map(({ x, y }, i) => (
            <CardRecommendation key={i} i={i} x={x} y={y} move={move} data={data[i]} bind={bind} />
        ))}
    </>
}

export default Deck
