import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";

function EssaysPage() {
    return (
        <div>
            <Link href='/dash/essays/personal'>
                <Button>
                    Go to personal essay
                </Button>
            </Link>
        </div>
    );
}

export default EssaysPage;
