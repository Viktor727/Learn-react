export default interface List {
    title: string;
    status: boolean;
    isEditing: boolean;
    id: string; // але має бути number, тут баг з бекенду
}

