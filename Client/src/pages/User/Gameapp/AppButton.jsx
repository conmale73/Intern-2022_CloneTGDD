function AppButton({ icon, name }) {
    const Icon = icon;
    return (
        <button className="bg-white border border-blue-400 outline-none p-4 rounded-lg">
            <i>
                <Icon />
            </i>
            {name}
        </button>
    );
}

export default AppButton;
