import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Pagination({ links }) {
    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                {links.map((link, k) => (
                    <li
                        className={`page-item ${link.active && "active"} ${
                            link.url === null && "disabled"
                        }`}
                        key={k}
                    >
                        <Link
                            disabled={link.url === null ? true : false}
                            as="button"
                            className="page-link"
                            key={k}
                            href={link.url}
                            dangerouslySetInnerHTML={{
                                __html: link.label,
                            }}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
}
