
enum Role {
    Admin,
    Editor,
    Viewer
}

interface User {
    username: string;
    email: string;
    role: Role;
}

function checkAccess(user: User): void {
    switch (user.role) {
        case Role.Admin:
            console.log("Admin: Full access");
            break;
        case Role.Editor:
            console.log("Editor: Can edit content");
            break;
        case Role.Viewer:
            console.log("Viewer: Read-only access");
            break;
        default:
            console.log("Unknown role");
    }
}

let adminUser: User = {
    username: "john",
    email: "john@example.com",
    role: Role.Admin
};

checkAccess(adminUser);