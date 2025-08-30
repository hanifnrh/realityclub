
type SectionTitleProps = {
    title: React.ReactNode;
};

function SectionTitle({ title }: SectionTitleProps) {
    return (
        <div className="z-20 not-even:flex flex-col items-center gap-10 w-full">
            <h2 className="font-helvetica-bold underline-offset-4 text-neutral-200 text-xl sm:text-2xl text-center tracking-[-1.20px] leading-[normal] underline">
                {title}
            </h2>
        </div>
    );
}

export default SectionTitle;
